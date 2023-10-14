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
    isLoading: true,
    lastRefKey: null,
    total: 0,
    requestStatus: null,
  }
  const slice = createSlice({
    name: nameAction(name, prefix),
    initialState,
    reducers: {
      setProducts(state, data: PayloadAction<Product[]>) {
        state.products = data.payload
        state.isLoading = false
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
