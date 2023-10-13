import { createAsyncThunk } from "@reduxjs/toolkit"
import { onAuthStateChanged } from "firebase/auth"
import { Suspense } from "react"
// import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

import { auth } from "@/shared/api"
// import { Loader } from "@/shared/ui/spinner"

import { router } from "./app/route"
import { store } from "./app/store"
import { NotificationPopup } from "./entities/notification"
import { sessionApi, normilizeUser } from "./shared/api/session"
function App() {
  // const isLoaded = useSelector(sessionModel.selectors.isLoaded)
  // if (!isLoaded)
  //   return (
  //     <div className="flex h-screen w-full items-center justify-center">
  //       <Loader />
  //     </div>
  //   )
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
    })
    dispatch(sessionModel.actions.endLoading())
    unsubscribe()
  },
)
store.dispatch(authAsyncThunk())
export default App
