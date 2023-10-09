import { ofType } from "redux-observable";
import {
  exhaustMap,
  from,
  mergeMap,
  of,
} from "rxjs";

import { notifyModel } from "@/entities/notification";
import { sessionModel } from "@/entities/session";
import { sessionApi } from "@/shared/api/session";
const editProfileEpic = (action$: any) =>
  action$.pipe(
    ofType(sessionModel.actions.startEditProfile),
    exhaustMap((action: any) =>
      from(sessionApi.updateProfile(action.payload.profile)).pipe(
        mergeMap((action: any) =>
          of(
            sessionModel.actions.setUser(action),
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
