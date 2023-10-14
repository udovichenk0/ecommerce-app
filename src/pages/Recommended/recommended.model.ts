import {
  combineReducers,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit"

import {
  CreateProducts,
  ProductsState,
  createProducts,
} from "@/entities/products"

import { productApi } from "@/shared/api/product"
type PageType = Record<CreateProducts["name"], ProductsState>
const pageName = "page/recommended"

const selectPage = (state: Record<typeof pageName, PageType>) =>
  state["page/recommended"]
const selectEntityProduct = createSelector(
  selectPage,
  (state) => state["entities/products"],
)
const productPrefix = "recommended/recommended-products"
const $$product = createProducts(selectEntityProduct, productPrefix)

const pageReducers = combineReducers({
  [$$product.name]: $$product.reducer,
})
const getRecommendedProductsFx = createAsyncThunk(
  "pages/recommended-products",
  async (_, { dispatch }) => {
    const data = await productApi.getRecommendedProducts()
    dispatch($$product.actions.setProducts(data))
  },
)
export const recommendedPage = {
  pageReducers: {
    [pageName]: pageReducers,
  },
  $$product,
  name: pageName,
  getRecommendedProductsFx,
}
