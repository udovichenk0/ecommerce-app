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

const pageName = "page/home"
type Page = Record<CreateProducts["name"], ProductsState>

const selectParent = (state: Record<typeof pageName, Page>) =>
  state["page/home"]

const featurePrefix = "featured"
const selectFeatureProducts = createSelector(
  selectParent,
  (state) => state[featurePrefix + "/entity/products"],
)
const $$featuredProducts = createProducts(selectFeatureProducts, featurePrefix)

const recommendedPrefix = "recommended"
const selectRecommendedProducts = createSelector(
  selectParent,
  (state) => state[recommendedPrefix + "/entity/products"],
)
const $$recommendedProducts = createProducts(
  selectRecommendedProducts,
  recommendedPrefix,
)

const getRecommendedProductsFx = createAsyncThunk(
  pageName + "recommended-products",
  async (_, { dispatch }) => {
    const recommendedProducts = await productApi.getRecommendedProducts()
    dispatch($$recommendedProducts.actions.setProducts(recommendedProducts))
  },
)
const getFeaturedProductsFx = createAsyncThunk(
  pageName + "featured-products",
  async (_, { dispatch }) => {
    const featuredProducts = await productApi.getFeaturedProducts()
    dispatch($$featuredProducts.actions.setProducts(featuredProducts))
  },
)

const homeReducers = combineReducers({
  [featurePrefix + "/entity/products"]: $$featuredProducts.reducer,
  [recommendedPrefix + "/entity/products"]: $$recommendedProducts.reducer,
})
export const homePage = {
  pageReducers: {
    [pageName]: homeReducers,
  },
  $$recommendedProducts,
  $$featuredProducts,
  getRecommendedProductsFx,
  getFeaturedProductsFx,
}
