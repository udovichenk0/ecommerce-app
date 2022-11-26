import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/no-internal-modules
import { SearchSvg } from "@/shared/assets/searchSvg"
import { useAction } from "@/shared/lib/redux-std"
import { SearchInput } from "@/shared/ui/searchInput"

import { actions } from "./model"

export const SearchProduct = () => {
	const navigate = useNavigate()
	const search = useAction(actions.startSearchFetching)
	const {handleSubmit, control} = useForm<{search: string}>({
		defaultValues: {
			search: ''
		}
	})
	function onclick(data:{search: string}){
		search(data.search)
		navigate('/search')
	}
	return (
		<form
		className="w-[300px] mr-7 relative"
		action="" onSubmit={handleSubmit(onclick)}>
			<button className="w-[47px] h-[47px] absolute left-0 flex items-center justify-center ">
				<SearchSvg/>
			</button>
			<Controller
			control={control}
			name={'search'}
			render={({ field: { onChange, onBlur, value, ref } }) => (
				<SearchInput onChange={onChange} onBlur={onBlur} value={value} inputRef={ref}/>
			)}
			/>
		</form>
	)
}