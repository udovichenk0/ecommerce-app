import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { Router } from "@remix-run/router"
const initialState = {
  router: null as Router | null,
}
type State = typeof initialState
const slice = createSlice({
  name: "router",
  initialState,
  reducers: {
    setRouter(state, action: PayloadAction<Router>) {
      state.router = action.payload
    },
  },
})

export const router = createSelector(
  (state: Record<typeof slice.name, State>) => state,
  (state) => state.router,
)
export const setRouter = slice.actions.setRouter
export const routerReducer = { [slice.name]: slice.reducer }
