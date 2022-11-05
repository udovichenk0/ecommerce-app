import { productModel } from "@/entities/products";
import { searchModel } from "@/features/search";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";


const epicMiddleware = createEpicMiddleware()
const rootEpics = combineEpics(
	productModel.epics.getProducts,
	searchModel.epics.searchEpic
)

export const store = configureStore({
	reducer: {
		...productModel.reducers,
		...searchModel.reducers
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(epicMiddleware);
	}
})

epicMiddleware.run(rootEpics)