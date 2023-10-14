import {
  combineReducers,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit"

import {
  CreateProduct,
  CreateProducts,
  ProductState,
  ProductsState,
  createProduct,
  createProducts,
} from "@/entities/products"

import { productApi } from "@/shared/api/product"

const pageName = "page/product"
type Page = Record<CreateProducts["name"], ProductsState> &
  Record<CreateProduct["name"], ProductState>
const selectParent = (state: Record<typeof pageName, Page>) =>
  state["page/product"]

const selectRecommendedProducts = createSelector(
  selectParent,
  (state) => state['entities/products'],
)
const recommendedPrefix = "product/recommended"
const $$recommendedProducts = createProducts(
  selectRecommendedProducts,
  recommendedPrefix,
)

const selectSingleProduct = createSelector(
  selectParent,
  (state) => state['entities/product'],
)
const singleProductPrefix = "product/single"
const $$singleProduct = createProduct(selectSingleProduct, singleProductPrefix)

const getRecommendedProductsFx = createAsyncThunk(
  pageName + "recommended-products",
  async (_, { dispatch }) => {
    const products = await productApi.getRecommendedProducts()
    dispatch($$recommendedProducts.actions.setProducts(products))
  },
)
const getSingleProductFx = createAsyncThunk(
  pageName + "single-product",
  async (id: string, { dispatch }) => {
    const product = await productApi.getSingleProduct(id)
    dispatch($$singleProduct.actions.setProduct(product))
  },
)

const productReducers = combineReducers({
  [$$recommendedProducts.name]: $$recommendedProducts.reducer,
  [$$singleProduct.name]: $$singleProduct.reducer,
})
export const productPage = {
  pageReducers: {
    [pageName]: productReducers,
  },
  $$recommendedProducts,
  $$singleProduct,
  getRecommendedProductsFx,
  getSingleProductFx,
}
