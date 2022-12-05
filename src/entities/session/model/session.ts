import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createBaseSelector } from "@/shared/lib/redux-std";
import { ProfileType } from "@/shared/lib/types";

const reducerName = "entity/session";

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

const baseSelector = createBaseSelector<State>(reducerName);
const profile = createSelector(baseSelector, (state) => state.profile);
const isFetching = createSelector(baseSelector, (state) => state.isFetching);

export const selectors = {
  profile,
  isFetching,
};

export const actions = {
  startAuth: slice.actions.startAuthentication,
  startSignInWithEmail: slice.actions.startSignInWithEmail,
  setProfile: slice.actions.setProfile,
  clearProfile: slice.actions.clearProfile,
  startSignOut: slice.actions.startSignOut,
  startsignInWithGitHub: slice.actions.startsignInWithGitHub,
  startSigninWithGoogle: slice.actions.startSigninWithGoogle,
  startEditProfile: slice.actions.startEditProfile,
};

export const reducer = {
  [reducerName]: slice.reducer,
};
