import { createAsyncThunk, createSelector, createSlice } from "@reduxjs/toolkit";

import { createBaseSelector } from "@/shared/lib/redux-std";

import { Basket } from "./types";

const reducerPath = "entity/basket";
const initialState = {
  basket: [] as Basket[],
};
type State = typeof initialState;
const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    addToBasket(state, action) {
      state.basket.push({
        ...action.payload,
        totalPrice: action.payload.price,
      });
    },
    setBasket(state, action) {
      state.basket = action.payload;
    },
    removeFromBasket(state, action) {
      state.basket = state.basket.filter(
        (item: Basket) => item.id !== action.payload
      );
    },
    addQuantity(state, action) {
      state.basket.find((item: Basket) => {
        if (item.id == action.payload) {
          item.quantity++;
        }
      });
    },
    clearBasket(state) {
      state.basket = [];
    },
    removeQuantity(state, action) {
      state.basket.find((item: Basket) => {
        if (item.id == action.payload) {
          item.quantity--;
        }
      });
    },
  },
});


const baseSelector = createBaseSelector<State>(reducerPath);
const basket = createSelector(baseSelector, (state) => state.basket);

export const selectors = {
  basket,
};
export const actions = {
  addToBasket: slice.actions.addToBasket,
  removeFromBasket: slice.actions.removeFromBasket,
  addQuantity: slice.actions.addQuantity,
  removeQuantity: slice.actions.removeQuantity,
  clearBasket: slice.actions.clearBasket,
  setBasket: slice.actions.setBasket,
};
export const reducer = { [reducerPath]: slice.reducer };
