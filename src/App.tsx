import { createAsyncThunk } from "@reduxjs/toolkit"
import { onAuthStateChanged } from "firebase/auth"
import { Suspense, useEffect } from "react"
import { RouterProvider } from "react-router-dom"

import { basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

import { auth } from "@/shared/api"

import { router } from "./app/route"
import { store } from "./app/store"
import { NotificationPopup } from "./entities/notification"
import { sessionApi, normilizeUser } from "./shared/api/session"
import { useAction } from "./shared/lib/redux-std"
import { routerModel } from "./shared/router"
function App() {
  const setRouter = useAction(routerModel.setRouter)
  useEffect(() => {
    setRouter(router)
  }, [])
  return (
    <>
      <Suspense fallback={null}>
        <RouterProvider router={router} />
      </Suspense>
      <NotificationPopup />
    </>
  )
}
const authAsyncThunk = createAsyncThunk(
  "authAsyncThunk",
  async (_, { dispatch }) => {
    dispatch(sessionModel.actions.startAuth())
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await sessionApi.getUser(user.uid)
        dispatch(sessionModel.actions.setUser(normilizeUser(data)))
        dispatch(basketModel.actions.setBasket(data.basket))
      }
      dispatch(sessionModel.actions.endLoading())
    })
    unsubscribe()
  },
)
store.dispatch(authAsyncThunk())
export default App
