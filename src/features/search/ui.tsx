
import { useAction } from "@/shared/lib/redux-std"
import { SearchInput } from "@/shared/ui/searchInput"

import { actions } from "./model"

export const SearchProduct = () => {
	const search = useAction(actions.startSearchFetching)
	return (
		<SearchInput method={search}/>
	)
}