import { api } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { Action, createSelector, createSlice, Observable, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { delay, exhaustMap, map, of } from "rxjs";
import { productType } from "./types";


const initialState = {
	products: [],
	isLoading: false
}

const reducerPath = 'entity/products'
type State = typeof initialState

const slice = createSlice({
	name: reducerPath,
	initialState,
	reducers: {
		fetchingStart(state){
			state.isLoading = true
		},
		fetchingSuccess(state:any, action: PayloadAction<productType[]>){

			state.products.push(...action.payload)
			state.isLoading = false
		},
	}
})

const getProducts = (action$: any): any => action$.pipe(
	ofType(reducerPath + '/fetchingStart'),
	delay(1000),
	exhaustMap(() => of(api.methods.getAll()).pipe(
		map(resp => slice.actions.fetchingSuccess(resp))
	)),
)

const baseSelector = createBaseSelector<State>(reducerPath)
const products = createSelector(
	baseSelector,
	(state) => state.products,
)
const isFetching = createSelector(
	baseSelector,
	(state) => state.isLoading,
)
export const actions = {
	startFetching: slice.actions.fetchingStart
}

export const selectors = {
	products,
	isFetching
}

export const epics = {
	getProducts
}

export const reducers = {[reducerPath]: slice.reducer}