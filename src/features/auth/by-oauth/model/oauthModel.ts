import { ofType } from "redux-observable";
import {
  catchError,
  exhaustMap,
  filter,
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

const signInGithubEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startsignInWithGitHub),
    mergeMap(() =>
      from(sessionApi.api.signInWithGithub()).pipe(
        map((response) => {
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

// map((response: any) => {
//   const data = {
//     avatar: response.photoURL,
//     email: response.email,
//     name: response.displayName,
//     mobile: response.mobile,
//     address: "",
//     basket: [],
//     uid: response.uid,
//     joinedData: response.creationTime,
//   };
//   if (response.isNewUser) sessionApi.api.addUser(data, response.uid);
//   return (
//     viewerModel.actions.setProfile(response),
//     notifyModel.actions.enqueueSnackbar({
//       message: "Successfully signed in",
//       type: "success",
//     })
//   );
// }),

const signInGoogleEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startSigninWithGoogle),
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

export const epics = {
  signInGithubEpic,
  signInGoogleEpic,
};
