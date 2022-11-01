import { api } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { Action, createSlice, Observable, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { exhaustMap, map, of } from "rxjs";

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
		fetchingStart(state, action: PayloadAction<any>){
			state.isLoading = true
		},
		fetchingSuccess(state:any, action){
			state.products.push(action.payload)
			state.isLoading = false
		},
	}
})

const getProducts = (action$: any): any => action$.pipe(
	ofType(reducerPath + '/fetchingStart'),
	exhaustMap(() => of(api.methods.getAll()).pipe(
		map(resp => console.log(resp))
	)),
)

const baseSelector = createBaseSelector<State>(reducerPath)

export const actions = {
	startFetching: slice.actions.fetchingStart
}


export const epics = {
	getProducts
}

export const reducers = {[reducerPath]: slice.reducer}