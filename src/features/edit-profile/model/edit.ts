import { createBrowserRouter } from "react-router-dom";
import { ofType } from "redux-observable";
import { exhaustMap, from, map, tap } from "rxjs";

import { viewerModel } from "@/entities/viewer";
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
