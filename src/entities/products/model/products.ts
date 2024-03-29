import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Product } from "@/shared/api/product"
import { nameAction } from "@/shared/lib/name-action"

export type ProductsState = {
  products: Product[]
  isLoading: boolean
  lastRefKey: string | null
  total: number
  requestStatus: null
}
export const createProducts = <RootState, Prefix extends string>(
  parentSelector: (state: RootState) => ProductsState,
  prefix: Prefix,
) => {
  const name = "entities/products" as const
  const initialState: ProductsState = {
    products: [],
    isLoading: false,
    lastRefKey: null,
    total: 0,
    requestStatus: null,
  }
  const slice = createSlice({
    name: nameAction(name, prefix),
    initialState,
    reducers: {
      startLoading(state) {
        state.isLoading = true
      },
      endLoading(state) {
        state.isLoading = false
      },
      setProducts(state, data: PayloadAction<Product[]>) {
        state.products = data.payload
      },
      mergeProducts(state, data: PayloadAction<Product[]>) {
        state.products = [...state.products, ...data.payload]
      },
      setLastRef(state, productRef: PayloadAction<string>) {
        state.lastRefKey = productRef.payload
      },
      setTotal(state, total: PayloadAction<number>) {
        state.total = total.payload
      },
    },
  })
  const actions = {
    setProducts: slice.actions.setProducts,
    mergeProducts: slice.actions.mergeProducts,
    setLastRef: slice.actions.setLastRef,
    setTotal: slice.actions.setTotal,
    startLoading: slice.actions.startLoading,
    endLoading: slice.actions.endLoading,
  }
  const products = createSelector(parentSelector, (state) => state.products)
  const lastRefKey = createSelector(parentSelector, (state) => state.lastRefKey)
  const isLoading = createSelector(parentSelector, (state) => state.isLoading)
  const selectors = {
    products,
    lastRefKey,
    isLoading,
  }
  return {
    actions,
    selectors,
    name,
    reducer: slice.reducer,
  }
}

export type CreateProducts = ReturnType<typeof createProducts>
