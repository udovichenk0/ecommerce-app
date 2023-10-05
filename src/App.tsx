import { createAsyncThunk } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { Suspense, useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { basketModel } from "@/entities/basket";
import { sessionApi, viewerModel } from "@/entities/session";
import { auth } from "@/shared/api";
import { Loader } from "@/shared/ui/spinner";

import { router } from "./app/route";
import { store, persistor } from "./app/store";
import { NotificationPopup } from "./entities/notification";

function App() {
  const isLoaded = useSelector(viewerModel.selectors.isLoaded)
  if(!isLoaded) return <div className="h-screen w-full flex items-center justify-center"><Loader/></div> 
  return (
    <div className=''>
      <Suspense fallback={null}>
        <RouterProvider router={router}/>
      </Suspense>
      <NotificationPopup/>
    </div>
  );
}
const authAsyncThunk  = createAsyncThunk('authAsyncThunk', async (_, {dispatch}) => {
  dispatch(viewerModel.actions.startAuth())
  dispatch(viewerModel.actions.startLoading())
  onAuthStateChanged(auth, async (user) => {
    if(user) {
      const data = await sessionApi.api.getUser(user.uid)
      dispatch(viewerModel.actions.setProfile(data))
      dispatch(basketModel.actions.setBasket(data?.basket))
    }
  })
  dispatch(viewerModel.actions.endLoading())
})
store.dispatch(authAsyncThunk())
export default App
