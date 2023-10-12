import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"

import { ProductId } from "@/shared/api/product"
import { createBaseSelector } from "@/shared/lib/redux-std"

import { BasketProduct } from "./types"

const reducerPath = "entity/basket"
const initialState = {
  basket: [] as BasketProduct[],
  isPending: false,
}
type State = typeof initialState
const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    startFetching(state) {
      state.isPending = true
    },
    endFetching(state) {
      state.isPending = false
    },
    addToBasket(state, action) {
      state.basket.push({
        ...action.payload,
        totalPrice: action.payload.price,
      })
    },
    setBasket(state, action: PayloadAction<BasketProduct[]>) {
      state.basket = action.payload
    },
    removeFromBasket(state, action: PayloadAction<ProductId>) {
      state.basket = state.basket.filter(
        (item: BasketProduct) => item.id !== action.payload,
      )
    },
    addQuantity(state, action) {
      state.basket.find((item: BasketProduct) => {
        if (item.id == action.payload) {
          item.quantity++
        }
      })
    },
    clearBasket(state) {
      state.basket = []
    },
    removeQuantity(state, action) {
      state.basket.find((item: BasketProduct) => {
        if (item.id == action.payload) {
          item.quantity--
        }
      })
    },
  },
})

const baseSelector = createBaseSelector<State>(reducerPath)
const basket = createSelector(baseSelector, (state) => state.basket)
const isPending = createSelector(baseSelector, (state) => state.isPending)

export const selectors = {
  basket,
  isPending,
}
export const actions = {
  addToBasket: slice.actions.addToBasket,
  removeFromBasket: slice.actions.removeFromBasket,
  addQuantity: slice.actions.addQuantity,
  removeQuantity: slice.actions.removeQuantity,
  clearBasket: slice.actions.clearBasket,
  setBasket: slice.actions.setBasket,
  startFetching: slice.actions.startFetching,
  endFetching: slice.actions.endFetching,
}
export const reducer = { [reducerPath]: slice.reducer }
