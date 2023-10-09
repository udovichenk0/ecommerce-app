import { createAsyncThunk } from "@reduxjs/toolkit"

import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"
import { sessionApi } from "@/shared/api/session"

export const signUpWithEmailFx = createAsyncThunk('auth/signInWithEmail', 
  async ({email, password, fullName}: {email: string, password: string, fullName: string}, { dispatch }) => {
  try {
    const response = await sessionApi.createAccount(email, password, fullName)
    dispatch(sessionModel.actions.setUser(response))
    dispatch(notifyModel.actions.enqueueSnackbar({
      message: "Successfully signed in",
      type: "success",
    }))
  } catch (error) {
    dispatch(   
      notifyModel.actions.enqueueSnackbar({
        message: "Failed to signin",
        type: "error",
      })
    )
  }
})