import { productModel } from "@/entities/products";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";


const epicMiddleware = createEpicMiddleware()
const rootEpics = combineEpics(
	productModel.epics.getProducts
)

export const store = configureStore({
	reducer: {
		...productModel.reducers
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(epicMiddleware);
	}
})

epicMiddleware.run(rootEpics)