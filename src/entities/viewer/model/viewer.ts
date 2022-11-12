import { createSelector, createSlice } from "@reduxjs/toolkit";
import { ofType } from "redux-observable";
import { catchError, exhaustMap, from, map, of, tap } from "rxjs";

import { firebase } from "@/shared/api";
import { createBaseSelector } from "@/shared/lib/redux-std";

const reducerName = "entity/viewer";
const initialState = {
  profile: null,
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
            joinedData: user.metadata.creationTime,
          };
          firebase.addUser(data, user.uid);
          return slice.actions.authSuccess(data);
        })
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
};

export const epics = {
  authEpic,
};

export const reducer = { [reducerName]: slice.reducer };
