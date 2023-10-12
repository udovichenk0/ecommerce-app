import { createAsyncThunk } from "@reduxjs/toolkit"

import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"

import { normilizeUser, sessionApi } from "@/shared/api/session"

export const signInWithEmailFx = createAsyncThunk(
  "auth/signInWithEmail",
  async (
    { email, password }: { email: string; password: string },
    { dispatch },
  ) => {
    try {
      const user = await sessionApi.signInWithEmail(email, password)
      dispatch(sessionModel.actions.setUser(normilizeUser(user)))
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
