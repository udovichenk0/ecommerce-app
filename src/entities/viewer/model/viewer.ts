import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, mergeMap, of, tap } from "rxjs";

import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { ProfileType } from "@/shared/lib/types";

const reducerName = "entity/viewer";

const initialState = {
  profile: {} as ProfileType,
  isFetching: false,
};
type State = typeof initialState;
const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    startAuthentication(state, action) {
      state.isFetching = true;
    },
    authSuccess(state, action) {
      state.profile = action.payload;
      state.isFetching = false;
    },
    clearProfile(state) {
      state.profile = {} as ProfileType;
    },
    setProfile(state, action: PayloadAction<any>) {
      state.profile = action.payload;
      state.isFetching = false;
    },
    startSignInWithEmail(state, action) {
      state.isFetching = true;
    },
    startsignInWithGitHub(state) {
      state.isFetching = true;
    },
    startSigninWithGoogle(state) {
      state.isFetching = true;
    },
    startSignOut(state) {
      state.isFetching = true;
    },

    startEditProfile(state, action: any) {
      state.isFetching = true;
    },
  },
});

const authEpic = (action$: any) =>
  action$.pipe(
    ofType(reducerName + "/startAuthentication"),
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
          return slice.actions.authSuccess(data);
        })
      )
    )
  );

const signInEpic = (action$: any) =>
  action$.pipe(
    ofType(reducerName + "/startSignInWithEmail"),
    exhaustMap(({ payload }) =>
      from(firebase.signIn(payload.email, payload.password)).pipe(
        map((response) => slice.actions.authSuccess(response.data())),
        catchError((error: any) => {
          throw new Error();
        })
      )
    )
  );

const signInGithubEpic = (action$: any) =>
  action$.pipe(
    ofType(reducerName + "/startsignInWithGitHub"),
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
          return slice.actions.authSuccess(response);
        })
      )
    )
  );

const signInGoogleEpic = (action$: any) =>
  action$.pipe(
    ofType(reducerName + "/startSigninWithGoogle"),
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
          return slice.actions.authSuccess(response);
        })
      )
    )
  );

const baseSelector = createBaseSelector<State>(reducerName);
const profile = createSelector(baseSelector, (state) => state.profile);
const isFetching = createSelector(baseSelector, (state) => state.isFetching);
export const selectors = {
  profile,
  isFetching,
};

export const actions = {
  authSuccess: slice.actions.authSuccess,
  startAuth: slice.actions.startAuthentication,
  startSignInWithEmail: slice.actions.startSignInWithEmail,
  setProfile: slice.actions.setProfile,
  clearProfile: slice.actions.clearProfile,
  startSignOut: slice.actions.startSignOut,
  startsignInWithGitHub: slice.actions.startsignInWithGitHub,
  startSigninWithGoogle: slice.actions.startSigninWithGoogle,
  startEditProfile: slice.actions.startEditProfile,
};

export const epics = {
  authEpic,
  signInEpic,
  signInGithubEpic,
  signInGoogleEpic,
};

export const reducer = { [reducerName]: slice.reducer };
