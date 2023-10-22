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
const $$recommendedProducts = createProducts(selectEntityProduct, productPrefix)

const pageReducers = combineReducers({
  [$$recommendedProducts.name]: $$recommendedProducts.reducer,
})
const getRecommendedProductsFx = createAsyncThunk(
  "pages/recommended-products",
  async (_, { dispatch }) => {
    const { startLoading, setProducts, endLoading } =
      $$recommendedProducts.actions
    try {
      dispatch(startLoading())
      const data = await productApi.getRecommendedProducts()
      dispatch(setProducts(data))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(endLoading())
    }
  },
)
export const recommendedPage = {
  pageReducers: {
    [pageName]: pageReducers,
  },
  $$product: $$recommendedProducts,
  name: pageName,
  getRecommendedProductsFx,
}
