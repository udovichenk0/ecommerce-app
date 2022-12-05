import { uuidv4 } from "@firebase/util";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { createBaseSelector } from "@/shared/lib/redux-std";

const reducerName = "entity/notification";
interface ISnackbar {
  message: string;
  type: "success" | "warning" | "error" | "info";
}

const initialState = {
  notifications: [] as INotification[],
};

type State = typeof initialState;

const slice = createSlice({
  name: reducerName,
  initialState,
  reducers: {
    enqueueSnackbar(state, action: PayloadAction<ISnackbar>) {
      state.notifications.push({ ...action.payload, key: uuidv4() });
    },
    closeSnackbar(state, action) {
      state.notifications = state.notifications.filter(
        (alert) => alert.key != action.payload
      );
    },
  },
});

const baseSelector = createBaseSelector<State>(reducerName);

const notifications = createSelector(
  baseSelector,
  (state) => state.notifications
);

export const selectors = {
  notifications,
};

export const actions = {
  enqueueSnackbar: slice.actions.enqueueSnackbar,
  closeSnackbar: slice.actions.closeSnackbar,
};

export const reducers = { [reducerName]: slice.reducer };
