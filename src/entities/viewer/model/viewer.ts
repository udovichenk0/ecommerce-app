import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, of, tap } from "rxjs";

import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";
import { ProfileType } from "@/shared/lib/types";

const reducerName = "entity/viewer";

const initialState = {
  profile: {} as ProfileType,
  isAuthentication: false,
};
type State = typeof initialState;
const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    startAuthentication(state, action) {
      state.isAuthentication = true;
    },
    authSuccess(state, action) {
      state.profile = action.payload;
      state.isAuthentication = false;
    },
    clearProfile(state) {
      state.profile = {} as ProfileType;
    },
    onAuthStateChanged(state, action) {
      state.profile = action.payload;
    },
    startSignInWithEmail(state, action) {
      state.isAuthentication = true;
    },
    startSignOut(state) {
      state.isAuthentication = true;
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
        map((response) => slice.actions.authSuccess(response.data()))
      )
    )
  );

const baseSelector = createBaseSelector<State>(reducerName);
const profile = createSelector(baseSelector, (state) => state.profile);

export const selectors = {
  profile,
};

export const actions = {
  authSuccess: slice.actions.authSuccess,
  startAuth: slice.actions.startAuthentication,
  startSignInWithEmail: slice.actions.startSignInWithEmail,
  onAuthStateChanged: slice.actions.onAuthStateChanged,
  clearProfile: slice.actions.clearProfile,
  startSignOut: slice.actions.startSignOut,
};

export const epics = {
  authEpic,
  signInEpic,
};

export const reducer = { [reducerName]: slice.reducer };
