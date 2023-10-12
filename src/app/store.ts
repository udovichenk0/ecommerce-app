import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { combineEpics, createEpicMiddleware } from "redux-observable"
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
import { profileModel } from "@/features/edit-profile"

import { sessionModel } from "@/entities/session"
import { notifyModel } from "@/entities/notification"
import { basketModel } from "@/entities/basket"

import { listenerMiddleware } from "@/shared/lib/redux-std"

const epicMiddleware = createEpicMiddleware()
const rootEpics = combineEpics(
  searchModel.epics.searchEpic,
  profileModel.epics.editProfileEpic,
)
const rootReducers = combineReducers({
  // ...productModel.reducers,
  ...searchModel.reducers,
  ...basketModel.reducer,
  ...sessionModel.reducer,
  ...notifyModel.reducers,
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
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(epicMiddleware)
      .prepend(listenerMiddleware.middleware)
  },
})
epicMiddleware.run(rootEpics)
export const persistor = persistStore(store)
