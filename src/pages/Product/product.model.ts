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
  (state) => state["entities/products"],
)
const recommendedPrefix = "product/recommended"
const $$recommendedProducts = createProducts(
  selectRecommendedProducts,
  recommendedPrefix,
)

const selectSingleProduct = createSelector(
  selectParent,
  (state) => state["entities/product"],
)
const singleProductPrefix = "product/single"
const $$singleProduct = createProduct(selectSingleProduct, singleProductPrefix)

const getRecommendedProductsFx = createAsyncThunk(
  pageName + "recommended-products",
  async (_, { dispatch }) => {
    const { startLoading, endLoading, setProducts } =
      $$recommendedProducts.actions
    try {
      dispatch(startLoading())
      const products = await productApi.getRecommendedProducts()
      dispatch(setProducts(products))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(endLoading())
    }
  },
)
const getSingleProductFx = createAsyncThunk(
  pageName + "single-product",
  async (id: string, { dispatch }) => {
    const { startLoading, endLoading, setProduct } = $$singleProduct.actions
    try {
      dispatch(startLoading())
      const product = await productApi.getSingleProduct(id)
      dispatch(setProduct(product))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(endLoading())
    }
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
