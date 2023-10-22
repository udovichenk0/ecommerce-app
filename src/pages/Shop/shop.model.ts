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

const pageName = "page/shop" as const
type Page = Record<CreateProducts["name"], ProductsState>
const selectParent = (state: Record<typeof pageName, Page>) =>
  state["page/shop"]
const selectEntityProduct = createSelector(
  selectParent,
  (state) => state["entities/products"],
)
const shopPrefix = "shop/products"
const $$products = createProducts(selectEntityProduct, shopPrefix)

const shopReducers = combineReducers({
  [$$products.name]: $$products.reducer,
})
const getProductsFx = createAsyncThunk(
  pageName + "products",
  async (_, { dispatch, getState }) => {
    const state = getState() as Record<typeof pageName, Page>
    const lastRefKey = $$products.selectors.lastRefKey(state)
    const { setProducts, setLastRef, setTotal, startLoading, endLoading } =
      $$products.actions
    if (!lastRefKey) {
      try {
        dispatch(startLoading())
        const { products, total, lastRef } = await productApi.getProducts()
        dispatch(setProducts(products))
        dispatch(setLastRef(lastRef))
        dispatch(setTotal(total))
      } catch (error) {
        console.log(error)
      } finally {
        dispatch(endLoading())
      }
    }
  },
)
const getNextProductFx = createAsyncThunk(
  pageName + "next-products",
  async (_, { dispatch, getState }) => {
    const state = getState() as Record<typeof pageName, Page>
    const lastRefKey = $$products.selectors.lastRefKey(state)
    if (!lastRefKey) return
    const { mergeProducts, setLastRef, setTotal, startLoading, endLoading } =
      $$products.actions
    try {
      dispatch(startLoading())
      const { products, total, lastRef } =
        await productApi.getProducts(lastRefKey)
      dispatch(mergeProducts(products))
      dispatch(setLastRef(lastRef))
      dispatch(setTotal(total))
    } catch (error) {
      console.log(error)
    } finally {
      dispatch(endLoading())
    }
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
