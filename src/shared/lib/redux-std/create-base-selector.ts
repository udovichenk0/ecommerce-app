import { rootState } from "./rootState"

export const createBaseSelector = <T>(rootKey: string) => {
  return (state: rootState) => {
    if (rootKey in state) {
      return state[rootKey] as T
    } else {
      throw new Error(`Selector ${rootKey} isn't registered`)
    }
  }
}
