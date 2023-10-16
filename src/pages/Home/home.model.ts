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
const recommendedPrefix = "home/recommended" as const
const featurePrefix = "home/featured" as const
type Page = Record<
  WithPrefix<typeof recommendedPrefix, CreateProducts["name"]>,
  ProductsState
> &
  Record<
    WithPrefix<typeof featurePrefix, CreateProducts["name"]>,
    ProductsState
  >

const selectParent = (state: Record<typeof pageName, Page>) =>
  state["page/home"]

const selectFeatureProducts = createSelector(
  selectParent,
  (state) => state["home/featured/entities/products"],
)
const $$featuredProducts = createProducts(selectFeatureProducts, featurePrefix)

const selectRecommendedProducts = createSelector(
  selectParent,
  (state) => state["home/recommended/entities/products"],
)
const $$recommendedProducts = createProducts(
  selectRecommendedProducts,
  recommendedPrefix,
)

const getRecommendedProductsFx = createAsyncThunk(
  pageName + "recommended-products",
  async (_, { dispatch }) => {
    const {startLoading, endLoading, setProducts} = $$recommendedProducts.actions
    try {
      dispatch(startLoading())
      const recommendedProducts = await productApi.getRecommendedProducts()
      dispatch(setProducts(recommendedProducts))
    } catch (error) {
      console.log(error)
    }
    finally {
      dispatch(endLoading())
    }
  },
)
const getFeaturedProductsFx = createAsyncThunk(
  pageName + "featured-products",
  async (_, { dispatch }) => {
    const {startLoading, endLoading, setProducts} = $$featuredProducts.actions
    try {
      dispatch(startLoading())
      const featuredProducts = await productApi.getFeaturedProducts()
      dispatch(setProducts(featuredProducts))
    } catch (error) {
      console.log(error)
    }
    finally {
      dispatch(endLoading())
    }
  },
)

const homeReducers = combineReducers({
  [featurePrefix + "/" + $$featuredProducts.name]: $$featuredProducts.reducer,
  [recommendedPrefix + "/" + $$recommendedProducts.name]:
    $$recommendedProducts.reducer,
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
