import { ofType } from "redux-observable";
import { from, of, switchMap } from "rxjs";

import { basketModel } from "@/entities/basket";
import { sessionApi, viewerModel } from "@/entities/session";

const signOutEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startSignOut),
    switchMap(() =>
      from(sessionApi.api.signUserOut()).pipe(
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
