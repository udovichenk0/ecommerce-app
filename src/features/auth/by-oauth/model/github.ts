import { createAsyncThunk } from "@reduxjs/toolkit"

import { basketModel } from "@/entities/basket"
import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"

import { sessionApi } from "@/shared/api/session"
export const signInWithGithubFx = createAsyncThunk(
  "auth/signWithGithub",
  async (_, { dispatch }) => {
    try {
      const user = await sessionApi.signInWithGithub()
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
