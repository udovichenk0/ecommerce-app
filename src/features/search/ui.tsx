import React from "react"
import { actions } from "./model"
import { useAction } from "@/shared/lib/redux-std"
import { SearchInput } from "@/shared/ui/searchInput"

export const SearchProduct = () => {
	const search = useAction(actions.startSearchFetching)
	return (
		<SearchInput method={search}/>
	)
}