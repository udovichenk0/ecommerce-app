import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map } from "rxjs";

import { firebase } from "@/shared/api";

import { actions } from "./session";

const authEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startAuthentication"),
    exhaustMap(({ payload }) =>
      from(firebase.createAccount(payload.email, payload.password)).pipe(
        map((response) => {
          const user = response.user;
          const data = {
            avatar: null,
            email: user.email,
            mobile: null,
            name: payload.fullName,
            address: "",
            basket: [],
            uid: user.uid,
            joinedData: user.metadata.creationTime,
          };
          firebase.addUser(data, user.uid);
          return actions.setProfile(data);
        })
      )
    )
  );

const signInEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startSignInWithEmail"),
    exhaustMap(({ payload }) =>
      from(firebase.signIn(payload.email, payload.password)).pipe(
        map((response) => actions.setProfile(response.data())),
        catchError((error: any) => {
          throw new Error();
        })
      )
    )
  );

const signInGithubEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startsignInWithGitHub"),
    exhaustMap(() =>
      from(firebase.signInWithGithub()).pipe(
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
          if (response.isNewUser) firebase.addUser(data, response.uid);
          return actions.setProfile(response);
        })
      )
    )
  );

const signInGoogleEpic = (action$: any) =>
  action$.pipe(
    ofType("entity/session" + "/startSigninWithGoogle"),
    exhaustMap(() =>
      from(firebase.signInWithGoogle()).pipe(
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
          if (response.isNewUser) firebase.addUser(data, response.uid);
          return actions.setProfile(response);
        })
      )
    )
  );

const editProfileEpic = (action$: any) =>
  action$.pipe(
    ofType(actions.startEditProfile),
    exhaustMap((action: any) =>
      from(firebase.updateProfile(action.payload)).pipe(
        map((resp) => actions.setProfile(resp))
      )
    )
  );

export const epics = {
  authEpic,
  signInEpic,
  signInGithubEpic,
  signInGoogleEpic,
  editProfileEpic,
};
