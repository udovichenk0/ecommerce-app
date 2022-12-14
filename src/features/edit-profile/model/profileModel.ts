import { redirect } from "react-router-dom";
import { ofType } from "redux-observable";
import {
  exhaustMap,
  from,
  map,
  merge,
  mergeMap,
  of,
  switchMap,
  tap,
} from "rxjs";

import { notifyModel } from "@/entities/notification";
import { sessionApi, viewerModel } from "@/entities/session";
const editProfileEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startEditProfile),
    exhaustMap((action: any) =>
      from(sessionApi.api.updateProfile(action.payload.profile)).pipe(
        mergeMap((action: any) =>
          of(
            viewerModel.actions.setProfile(action),
            notifyModel.actions.enqueueSnackbar({
              message: "Profile Updated!",
              type: "success",
            })
          )
        )
      )
    )
  );

export const epics = {
  editProfileEpic,
};
