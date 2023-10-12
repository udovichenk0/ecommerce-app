import { createAsyncThunk } from "@reduxjs/toolkit"

import { basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

import { sessionApi } from "@/shared/api/session"
export const signOutFx = createAsyncThunk(
  "auth/signOut",
  async (_, { dispatch }) => {
    try {
      await sessionApi.signUserOut()
      dispatch(sessionModel.actions.clearProfile())
      dispatch(basketModel.actions.clearBasket())
    } catch (error) {
      console.log(error)
    }
  },
)
