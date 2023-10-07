import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createBrowserRouter, redirect } from "react-router-dom";
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
import { notifyModel } from "@/entities/notification";
import { viewerModel } from "@/entities/session";
import { emailModel, oauthModel } from "@/features/auth";
import { signOutModel } from "@/features/auth/sign-out";
import { profileModel } from "@/features/edit-profile";
import { searchModel } from "@/features/search";
import { featurePage } from "@/pages/Featured";
import { homePage } from "@/pages/Home";
import { productPage } from "@/pages/Product";
import { recommendedPage } from "@/pages/Recommended";
import { shopPage } from "@/pages/Shop";

const epicMiddleware = createEpicMiddleware();
const rootEpics = combineEpics(
  // productModel.epics.getProducts,
  searchModel.epics.searchEpic,
  emailModel.epics.signInEpic,
  profileModel.epics.editProfileEpic,
  signOutModel.epics.signOutEpic,
  oauthModel.epics.signInGithubEpic,
  oauthModel.epics.signInGoogleEpic
);
const rootReducers = combineReducers({
  // ...productModel.reducers,
  ...searchModel.reducers,
  ...basketModel.reducer,
  ...viewerModel.reducer,
  ...notifyModel.reducers,
  ...featurePage.pageReducers,
  ...recommendedPage.pageReducers,
  ...homePage.pageReducers,
  ...productPage.pageReducers,
  ...shopPage.pageReducers
});
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entity/basket"],
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
epicMiddleware.run(rootEpics);
export const persistor = persistStore(store);