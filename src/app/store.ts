import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";


const epicMiddleware = createEpicMiddleware()

export const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(epicMiddleware);
	}
})

epicMiddleware.run()