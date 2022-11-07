import React from "react"

import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { SearchSvg } from "@/shared/assets/searchSvg"
interface IProps{
	// eslint-disable-next-line no-unused-vars
	method: (sInput: string) => void
}
export const SearchInput = ({method}:IProps) => {
	const navigate = useNavigate()
	const {handleSubmit, control} = useForm<{search: string}>({
		defaultValues: {
			search: ''
		}
	})
	function onclick(data:{search: string}){
		console.log(data)
		method(data.search)
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
					<input
					placeholder="Search product..."
					className="w-full py-2 px-16 text-xl border-[1px] border-[#e1e1e1]"
					type="text" onChange={onChange} onBlur={onBlur} value={value} ref={ref}/>
			)}
			/>
		</form>
		
	)
}