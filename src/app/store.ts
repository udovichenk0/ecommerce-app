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
import { notifyModel } from "@/entities/notification";
import { productModel } from "@/entities/products";
import { viewerModel } from "@/entities/session";
import { emailModel, oauthModel } from "@/features/auth";
import { signOutModel } from "@/features/auth/sign-out";
import { profileModel } from "@/features/edit-profile";
import { searchModel } from "@/features/search";

const epicMiddleware = createEpicMiddleware();
const rootEpics = combineEpics(
  productModel.epics.getProducts,
  searchModel.epics.searchEpic,
  viewerModel.epics.authEpic,
  emailModel.epics.signInEpic,
  profileModel.epics.editProfileEpic,
  signOutModel.epics.signOutEpic,
  oauthModel.epics.signInGithubEpic,
  oauthModel.epics.signInGoogleEpic
);
const rootReducers = combineReducers({
  ...productModel.reducers,
  ...searchModel.reducers,
  ...basketModel.reducer,
  ...viewerModel.reducer,
  ...notifyModel.reducers,
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
export const persistor = persistStore(store);
epicMiddleware.run(rootEpics);
