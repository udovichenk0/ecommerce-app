import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"

import { Product } from "@/shared/api/product"
import { nameAction } from "@/shared/lib/name-action"

export type ProductState = {
  product: Product
  isLoading: boolean
}
export const createProduct = <RootState, Prefix extends string>(
  parentSelector: (state: RootState) => ProductState,
  prefix: Prefix,
) => {
  const name = "entities/product" as const
  const initialState: ProductState = {
    product: {} as Product,
    isLoading: true,
  }
  const slice = createSlice({
    name: nameAction(name, prefix),
    initialState,
    reducers: {
      setProduct(state, data: PayloadAction<Product>) {
        state.product = data.payload
        state.isLoading = false
      },
    },
  })
  const actions = {
    setProduct: slice.actions.setProduct,
  }
  const product = createSelector(parentSelector, (state) => state.product)
  const selectors = {
    product,
  }
  return {
    actions,
    selectors,
    name,
    reducer: slice.reducer,
  }
}

export type CreateProduct = ReturnType<typeof createProduct>
