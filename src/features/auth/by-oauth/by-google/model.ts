import { createAsyncThunk } from "@reduxjs/toolkit"

import { basketModel } from "@/entities/basket"
import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"

import { sessionApi } from "@/shared/api/session"

export const signWithGoogleFx = createAsyncThunk(
  "auth/signIdWithGoogle",
  async (_, { dispatch }) => {
    try {
      const user = await sessionApi.signInWithGoogle()
      dispatch(sessionModel.actions.setUser(user))
      dispatch(basketModel.actions.setBasket(user.basket))
      dispatch(
        notifyModel.actions.enqueueSnackbar({
          message: "Successfully signed in",
          type: "success",
        }),
      )
    } catch (error) {
      dispatch(
        notifyModel.actions.enqueueSnackbar({
          message: "Failed to signin",
          type: "error",
        }),
      )
    }
  },
)
