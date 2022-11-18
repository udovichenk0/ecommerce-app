import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { basketModel } from "@/entities/basket";
import { productModel } from "@/entities/products";
import { viewerModel } from "@/entities/viewer";
import { searchModel } from "@/features/search";
import { signOutModel } from "@/features/sign-out";

const epicMiddleware = createEpicMiddleware();
const rootEpics = combineEpics(
  productModel.epics.getProducts,
  searchModel.epics.searchEpic,
  viewerModel.epics.authEpic,
  viewerModel.epics.signInEpic,
  viewerModel.epics.signInGithubEpic,
  viewerModel.epics.signInGoogleEpic,
  signOutModel.epics.signOutEpic
);
const rootReducers = combineReducers({
  ...productModel.reducers,
  ...searchModel.reducers,
  ...basketModel.reducer,
  ...viewerModel.reducer,
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entity/basket", "entity/viewer"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        serializableCheck: false,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(epicMiddleware);
  },
});
export const persistor = persistStore(store);
epicMiddleware.run(rootEpics);
