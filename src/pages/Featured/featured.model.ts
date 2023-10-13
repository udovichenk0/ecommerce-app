import {
  combineReducers,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit"

import {
  createProducts,
  CreateProducts,
  ProductsState,
} from "@/entities/products"

import { productApi } from "@/shared/api/product"
const pageName = "page/featured"
type Page = Record<CreateProducts["name"], ProductsState>
const selectPage = (state: Record<typeof pageName, Page>) =>
  state["page/featured"]
const selectEntityProduct = createSelector(
  selectPage,
  (state) => state["entity/products"],
)
const featuredPrefix = "featured/feature-products"
const $$product = createProducts(selectEntityProduct, featuredPrefix)

const getFeatureProductsFx = createAsyncThunk(
  pageName + "featured-products",
  async (_, { dispatch }) => {
    const data = await productApi.getFeaturedProducts()
    dispatch($$product.actions.setProducts(data))
  },
)

const pageReducers = combineReducers({
  [$$product.name]: $$product.reducer,
})

export const featurePage = {
  pageReducers: {
    [pageName]: pageReducers,
  },
  getFeatureProductsFx,
  $$product,
  name: pageName,
}
