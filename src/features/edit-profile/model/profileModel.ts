import { ofType } from "redux-observable";
import { exhaustMap, from, map, of } from "rxjs";

import { sessionApi, viewerModel } from "@/entities/session";

const editProfileEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startEditProfile),
    exhaustMap((action: any) =>
      from(sessionApi.api.updateProfile(action.payload)).pipe(
        map((resp) => viewerModel.actions.setProfile(resp))
      )
    )
  );

export const epics = {
  editProfileEpic,
};
