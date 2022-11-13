import { ofType } from "redux-observable";
import { exhaustMap, from, map } from "rxjs";

import { basketModel } from "@/entities/basket";
import { viewerModel } from "@/entities/viewer";
import { firebase } from "@/shared/api";

const signOutEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/viewer" + "/startSignOut"),
    exhaustMap(() =>
      from(firebase.signUserOut()).pipe(
        map(() => {
          console.log(1);
          basketModel.actions.clearBasket();
          return viewerModel.actions.clearProfile();
        })
      )
    )
  );

export const epics = {
  signOutEpic,
};
