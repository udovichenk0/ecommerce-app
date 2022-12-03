import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line import/no-internal-modules
import { SearchSvg } from "@/features/search/assets/searchSvg"
interface IProps{
	// eslint-disable-next-line no-unused-vars
	method: (sInput: string) => void
}
export const SearchInput = ({onChange, onBlur, value, inputRef}:any) => {
	return (
		<input
		placeholder="Search product..."
		className="w-full py-2 px-16 text-xl border-[1px] border-[#e1e1e1] outline-none"
		type="text" onChange={onChange} onBlur={onBlur} value={value} ref={inputRef}/>
	)
}