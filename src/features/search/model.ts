import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit"

import { Product } from "@/entities/products"

import { createBaseSelector } from "@/shared/lib/redux-std"
import { productApi } from "@/shared/api/product"
import { routerModel } from "@/shared/router"
import { routes } from "@/shared/config/routes"

const initialState = {
  products: [] as Product[],
  isLoading: false,
  error: null as string | null,
}
const reducerPath = "entity/search"
type State = typeof initialState
const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true
    },
    endLoading(state) {
      state.isLoading = false
    },
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload
    },
  },
})

export const searchProductsFx = createAsyncThunk(
  "feature/search/searchProducts",
  async (searchName: string, { dispatch, getState }) => {
    const state = getState()
    const { router } = routerModel.router(state as any)
    try {
      const pathname = location.pathname.split("/")[1]
      dispatch(slice.actions.startLoading())
      const result = await productApi.searchProducts(searchName)
      dispatch(slice.actions.setProducts(result))
      if (pathname != "search") {
        router?.navigate(routes.search + `?title=${searchName}`)
      }
    } catch (error) {
      dispatch(slice.actions.setError("Something went wrong :("))
    } finally {
      dispatch(slice.actions.endLoading())
    }
  },
)

const baseSelector = createBaseSelector<State>(reducerPath)

const searchedProducts = createSelector(baseSelector, (state) => state.products)
const isLoading = createSelector(baseSelector, (state) => state.isLoading)

export const selectors = {
  searchedProducts,
  isLoading,
}

export const reducers = { [reducerPath]: slice.reducer }
