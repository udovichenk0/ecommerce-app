import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { Action, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Epic, ofType } from "redux-observable";
import { distinctUntilChanged, exhaustMap, from, map, Observable, of, tap } from "rxjs";


const initialState = {
	foundProducts: [],
	isFetching: false
}
const reducerPath = 'entity/search'
type State = typeof initialState
const slice = createSlice({
	name: reducerPath,
	initialState,
	reducers: {
		startSearchFetching(state, action:PayloadAction<string>){
			state.isFetching = true
		},
		foundProductsSuccess(state, action:any){
			state.foundProducts = action.payload
			state.isFetching = false
			console.log(state.foundProducts)
		}
	}
})


const searchEpic: Epic = (action$) => action$.pipe(
	ofType(reducerPath +'/startSearchFetching'),
	distinctUntilChanged(),
	exhaustMap(({payload}:any) => from(firebase.searchProducts(payload)).pipe(
		map(slice.actions.foundProductsSuccess)
	))
)


const baseSelector = createBaseSelector<State>(reducerPath)


export const reducers = {[reducerPath]: slice.reducer}

export const epics = {
	searchEpic
}

export const actions = {
	startSearchFetching: slice.actions.startSearchFetching
}