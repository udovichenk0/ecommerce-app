import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit";

import { Product } from "@/shared/api/product";


export type ProductState = {
  product: Product,
  isLoading: boolean,
}
export const createProduct = <RootState, Prefix>(
  parentSelector: (state: RootState) => ProductState,
  prefix?: Prefix,
  ) => {
    const name = prefix ? `${prefix}/${"entity/product"}` : "entity/product" as const
    const initialState1: ProductState = {
      product: {} as Product,
      isLoading: true,
    };
    const slice = createSlice({
    name,
    initialState: initialState1,
    reducers: {
      setProduct(state, data: PayloadAction<Product>){
        state.product = data.payload
        state.isLoading = false
      },
    },
  });
  const actions = {
    setProduct: slice.actions.setProduct
  }
  const product = createSelector(parentSelector, (state) => state.product)
  const selectors = {
    product
  }
  return {
    actions,
    selectors,
    name,
    reducer: slice.reducer
  }
}

export type CreateProduct = ReturnType<typeof createProduct>