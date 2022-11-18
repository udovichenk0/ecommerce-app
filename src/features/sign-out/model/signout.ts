import { ofType } from "redux-observable";
import { from, of, switchMap } from "rxjs";

import { basketModel } from "@/entities/basket";
import { viewerModel } from "@/entities/viewer";
import { firebase } from "@/shared/api";

const signOutEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/viewer" + "/startSignOut"),
    switchMap(() =>
      from(firebase.signUserOut()).pipe(
        switchMap(() =>
          of(
            viewerModel.actions.clearProfile(),
            basketModel.actions.clearBasket()
          )
        )
      )
    )
  );

export const epics = {
  signOutEpic,
};
