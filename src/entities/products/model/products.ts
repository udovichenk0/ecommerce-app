import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, filter, from, map, of } from "rxjs";

import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";

const initialState = {
  products: [],
  isLoading: false,
  lastRefKey: null,
  total: 0,
  requestStatus: null,
};

const reducerPath = "entity/products";
type State = typeof initialState;

const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    fetchingStart(state, action: PayloadAction<null | string>) {
      state.isLoading = true;
    },
    fetchingSuccess(state: any, action: any) {
      state.products = [...state.products, ...action.payload.products];
      state.isLoading = false;
      state.lastRefKey = action.payload.lastRef;
      state.total = action.payload.total ?? state.total;
      state.requestStatus = null;
    },
    fetchingFail(state, action) {
      state.requestStatus = action.payload;
    },
  },
});

const getProducts = (action$: any): any =>
  action$.pipe(
    ofType(reducerPath + "/fetchingStart"),
    filter(
      (action: PayloadAction<string | null>) =>
        typeof action.payload === "string" || action.payload === null
    ),
    exhaustMap((action: PayloadAction<null | string>) =>
      from(firebase.getProducts(action.payload)).pipe(
        map((response: any) =>
          slice.actions.fetchingSuccess({
            products: response.products,
            lastRef: response.lastRef,
            total: response.total,
          })
        ),
        catchError((err) =>
          of(err).pipe(
            map(() =>
              slice.actions.fetchingFail("Failed to fetch products! :(")
            )
          )
        )
      )
    )
  );

//Selectors
const baseSelector = createBaseSelector<State>(reducerPath);
const products = createSelector(baseSelector, (state) => state.products);
const isFetching = createSelector(baseSelector, (state) => state.isLoading);

const lastRefKey = createSelector(baseSelector, (state) => state.lastRefKey);
const requestStatus = createSelector(
  baseSelector,
  (state) => state.requestStatus
);

export const selectors = {
  products,
  isFetching,
  lastRefKey,
  requestStatus,
};

//Actions
export const actions = {
  startFetching: slice.actions.fetchingStart,
};
//Epics
export const epics = {
  getProducts,
};

export const reducers = { [reducerPath]: slice.reducer };
