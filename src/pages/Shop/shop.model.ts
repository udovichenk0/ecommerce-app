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

const pageName = "page/shop"
type Page = Record<CreateProducts["name"], ProductsState>
const selectParent = (state: Record<typeof pageName, Page>) =>
  state["page/shop"]
const selectEntityProduct = createSelector(
  selectParent,
  (state) => state["entity/products"],
)
const $$products = createProducts(selectEntityProduct)

const shopReducers = combineReducers({
  [$$products.name]: $$products.reducer,
})
const getProductsFx = createAsyncThunk(
  pageName + "fetch",
  async (_, { dispatch, getState }) => {
    const state = getState() as Record<typeof pageName, Page>
    const lastRefKey = $$products.selectors.lastRefKey(state)
    const { setProducts, setLastRef, setTotal } = $$products.actions
    if (!lastRefKey) {
      const { products, total, lastRef } = await productApi.getProducts()
      dispatch(setProducts(products))
      dispatch(setLastRef(lastRef))
      dispatch(setTotal(total))
    }
  },
)
const getNextProductFx = createAsyncThunk(
  pageName + "next-products",
  async (_, { dispatch, getState }) => {
    const state = getState() as Record<typeof pageName, Page>
    const lastRefKey = $$products.selectors.lastRefKey(state)
    if (!lastRefKey) return
    const { mergeProducts, setLastRef, setTotal } = $$products.actions
    const { products, total, lastRef } =
      await productApi.getProducts(lastRefKey)
    dispatch(mergeProducts(products))
    dispatch(setLastRef(lastRef))
    dispatch(setTotal(total))
  },
)
export const shopPage = {
  pageReducers: {
    [pageName]: shopReducers,
  },
  $$products,
  getProductsFx,
  getNextProductFx,
}
