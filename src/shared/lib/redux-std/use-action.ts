import { useCallback } from "react"
import { useDispatch } from "react-redux"

export const useAction = <A extends any[]>(
actionCreator: (...args: A) => any
) => {
	const dispatch = useDispatch()
	return useCallback (
		(...args: A) => dispatch(actionCreator.apply(null,args)),
		[actionCreator, dispatch]
		)
}