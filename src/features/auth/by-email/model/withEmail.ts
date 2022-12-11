import { PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, of } from "rxjs";

import { notifyModel } from "@/entities/notification";
import { sessionApi, viewerModel } from "@/entities/session";

interface IPayload {
  email: string;
  password: string;
}
const signInEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startSignInWithEmail),
    exhaustMap(({ payload }: PayloadAction<IPayload>) =>
      from(sessionApi.api.signIn(payload.email, payload.password)).pipe(
        map(
          (response) => (
            viewerModel.actions.setProfile(response.data()),
            notifyModel.actions.enqueueSnackbar({
              message: "Successfully signed in",
              type: "success",
            })
          )
        ),
        catchError((error: unknown) =>
          of(
            notifyModel.actions.enqueueSnackbar({
              message: "Failed to signin",
              type: "error",
            })
          )
        )
      )
    )
  );

export const epics = {
  signInEpic,
};
