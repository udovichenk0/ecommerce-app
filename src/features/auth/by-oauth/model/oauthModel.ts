import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, mergeMap, of } from "rxjs";

import { notifyModel } from "@/entities/notification";
import { sessionApi, viewerModel } from "@/entities/session";
import { firebase } from "@/shared/api";

const signInGithubEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startsignInWithGitHub"),
    mergeMap(() =>
      from(sessionApi.api.signInWithGithub()).pipe(
        map((response: any) => {
          const data = {
            avatar: response.photoURL,
            email: response.email,
            name: response.displayName,
            mobile: response.mobile,
            address: "",
            basket: [],
            uid: response.uid,
            joinedData: response.creationTime,
          };
          if (response.isNewUser) sessionApi.api.addUser(data, response.uid);
          return (
            viewerModel.actions.setProfile(response),
            notifyModel.actions.enqueueSnackbar({
              message: "Successfully signed in",
              type: "success",
            })
          );
        }),
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

const signInGoogleEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startSigninWithGoogle"),
    exhaustMap(() =>
      from(sessionApi.api.signInWithGoogle()).pipe(
        map((response: any) => {
          const data = {
            avatar: response.photoURL,
            email: response.email,
            name: response.displayName,
            mobile: response.mobile,
            address: "",
            basket: [],
            uid: response.uid,
            joinedData: response.creationTime,
          };
          if (response.isNewUser) sessionApi.api.addUser(data, response.uid);
          return (
            viewerModel.actions.setProfile(response),
            notifyModel.actions.enqueueSnackbar({
              message: "Successfully signed in",
              type: "success",
            })
          );
        })
      )
    )
  );

export const epics = {
  signInGithubEpic,
  signInGoogleEpic,
};
