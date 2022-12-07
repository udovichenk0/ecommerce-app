import { ofType } from "redux-observable";
import { exhaustMap, from, map, of } from "rxjs";

import { notifyModel } from "@/entities/notification";
import { viewerModel } from "@/entities/session";
import { firebase } from "@/shared/api";

const editProfileEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startEditProfile),
    exhaustMap((action: any) =>
      from(firebase.updateProfile(action.payload)).pipe(
        map((resp) => viewerModel.actions.setProfile(resp))
      )
    )
  );

export const epics = {
  editProfileEpic,
};
