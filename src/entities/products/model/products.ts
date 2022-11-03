import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, tap } from "rxjs";


const initialState = {
	products: [],
	isLoading: false,
	lastRefKey: null,
	total: 0
}

const reducerPath = 'entity/products'
type State = typeof initialState

const slice = createSlice({
	name: reducerPath,
	initialState,
	reducers: {
		fetchingStart(state, action: PayloadAction<null | string>){
			state.isLoading = true
		},
		fetchingSuccess(state:any, action: any){
			state.products.push(...action.payload.products)
			state.isLoading = false
			state.lastRefKey = action.payload.lastRef
			state.total = action.payload.total ?? state.total
		},
	}
})

const getProducts = (action$:any):any=> action$.pipe(
	ofType(reducerPath + '/fetchingStart'),
	exhaustMap((action:PayloadAction<null | string>) => from(firebase.getProducts(action.payload)).pipe(
		map((response:any) =>  
		slice.actions.fetchingSuccess({
			products: response.products, 
			lastRef: response.lastRef,
			total: response.total,
		})
		),
		catchError((err) => {throw new Error(err)})
	)
	)
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

const lastRefKey = createSelector(
	baseSelector,
	(state) => state.lastRefKey
)

export const actions = {
	startFetching: slice.actions.fetchingStart
}

export const selectors = {
	products,
	isFetching,
	lastRefKey
}

export const epics = {
	getProducts
}

export const reducers = {[reducerPath]: slice.reducer}