import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import { featurePage } from "@/pages/Featured"
import { homePage } from "@/pages/Home"
import { productPage } from "@/pages/Product"
import { recommendedPage } from "@/pages/Recommended"
import { shopPage } from "@/pages/Shop"

import { searchModel } from "@/features/search"

import { sessionModel } from "@/entities/session"
import { notifyModel } from "@/entities/notification"
import { basketModel } from "@/entities/basket"

import { listenerMiddleware } from "@/shared/lib/redux-std"
import { routerModel } from "@/shared/router"

const rootReducers = combineReducers({
  ...searchModel.reducers,
  ...basketModel.reducer,
  ...sessionModel.reducer,
  ...notifyModel.reducers,
  ...routerModel.routerReducer,
  ...featurePage.pageReducers,
  ...recommendedPage.pageReducers,
  ...homePage.pageReducers,
  ...productPage.pageReducers,
  ...shopPage.pageReducers,
})
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entity/basket"],
}
export const persistedReducer = persistReducer(persistConfig, rootReducers)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        serializableCheck: false,
        ignoredPaths: ["router.router"],
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          routerModel.setRouter.type,
        ],
      },
    }).prepend(listenerMiddleware.middleware)
  },
})
export const persistor = persistStore(store)
