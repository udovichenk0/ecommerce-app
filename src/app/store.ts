import { combineEpics, createEpicMiddleware } from "redux-observable";
import { configureStore } from "@reduxjs/toolkit";
import { productModel } from "@/entities/products";
import { searchModel } from "@/features/search";
console.log(productModel);

const epicMiddleware = createEpicMiddleware();
const rootEpics = combineEpics(
  productModel.epics.getProducts,
  searchModel.epics.searchEpic
);

export const store = configureStore({
  reducer: {
    ...productModel.reducers,
    ...searchModel.reducers,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(epicMiddleware);
  },
});

epicMiddleware.run(rootEpics);
