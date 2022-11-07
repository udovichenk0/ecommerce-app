import { TypedUseSelectorHook, useSelector } from "react-redux";

import { rootState } from "./rootState";

export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
