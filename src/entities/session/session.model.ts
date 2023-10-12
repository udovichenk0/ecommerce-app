import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"

import { createBaseSelector } from "@/shared/lib/redux-std"

import { User } from "./types"

const reducerName = "entity/session"

const initialState = {
  profile: {} as User,
  isFetching: false,
  isLoaded: false,
}
type State = typeof initialState
const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    startAuthentication(state) {
      state.isFetching = true
    },
    endLoading(state) {
      state.isLoaded = true
    },
    clearProfile(state) {
      state.profile = {} as User
    },
    setUser(state, action: PayloadAction<User>) {
      state.profile = action.payload
      state.isFetching = false
    },
    startEditProfile(state, action: any) {
      state.isFetching = true
    },
  },
})

const baseSelector = createBaseSelector<State>(reducerName)
const profile = createSelector(baseSelector, (state) => state.profile)
const isFetching = createSelector(baseSelector, (state) => state.isFetching)
const isLoaded = createSelector(baseSelector, (state) => state.isLoaded)
export const selectors = {
  profile,
  isFetching,
  isLoaded,
}

export const actions = {
  startAuth: slice.actions.startAuthentication,
  setUser: slice.actions.setUser,
  clearProfile: slice.actions.clearProfile,
  startEditProfile: slice.actions.startEditProfile,
  endLoading: slice.actions.endLoading,
}

export const reducer = {
  [reducerName]: slice.reducer,
}
