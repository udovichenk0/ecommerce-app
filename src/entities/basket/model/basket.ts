import { createSelector, createSlice } from "@reduxjs/toolkit";

import { createBaseSelector } from "@/shared/lib/redux-std";

const reducerPath = "entity/basket";
const initialState = {
  basket: [] as any,
};
type State = typeof initialState;
const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    addToBasket(state, action) {
      console.log(action.payload);
      state.basket.push(action.payload);
    },
    removeFromBasket(state, action) {
      state.basket = state.basket.filter(
        (item: any) => item.id !== action.payload
      );
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
};
export const reducer = { [reducerPath]: slice.reducer };
