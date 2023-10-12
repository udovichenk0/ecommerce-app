import { createSelector, createSlice } from "@reduxjs/toolkit"
import { Epic, ofType } from "redux-observable"
import {
  catchError,
  distinctUntilChanged,
  from,
  map,
  of,
  switchMap,
} from "rxjs"

import { createBaseSelector } from "@/shared/lib/redux-std"

import { api } from "../api"
const initialState = {
  foundProducts: [],
  isSearchedFetching: false,
  requestStatus: null,
}
const reducerPath = "entity/search"
type State = typeof initialState
const slice = createSlice({
  name: reducerPath,
  initialState,
  reducers: {
    // eslint-disable-next-line no-unused-vars
    startSearchFetching(state) {
      state.isSearchedFetching = true
    },
    foundProductsSuccess(state, action: any) {
      state.foundProducts = action.payload
      state.isSearchedFetching = false
    },
    foundProductsError(state, action) {
      state.requestStatus = action.payload
    },
  },
})

const searchEpic: Epic = (action$) =>
  action$.pipe(
    ofType(reducerPath + "/startSearchFetching"),
    distinctUntilChanged(),
    switchMap(({ payload }: any) =>
      from(api.searchProducts(payload)).pipe(
        map(slice.actions.foundProductsSuccess),
        catchError((err: any) =>
          of(err).pipe(
            map((err) =>
              slice.actions.foundProductsError(
                err.message || "Something went wrong :(",
              ),
            ),
          ),
        ),
      ),
    ),
  )

const baseSelector = createBaseSelector<State>(reducerPath)

const searchedProducts = createSelector(
  baseSelector,
  (state) => state.foundProducts,
)
const isSearchedFetching = createSelector(
  baseSelector,
  (state) => state.isSearchedFetching,
)

export const selectors = {
  searchedProducts,
  isSearchedFetching,
}

export const epics = {
  searchEpic,
}

export const actions = {
  startSearchFetching: slice.actions.startSearchFetching,
}
export const reducers = { [reducerPath]: slice.reducer }
