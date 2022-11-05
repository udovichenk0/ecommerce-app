import { SearchSvg } from "@/shared/assets/searchSvg"
import { Controller, useForm } from "react-hook-form"

export const SearchInput = ({method}:any) => {
	const {register, handleSubmit, control} = useForm({
		defaultValues: {
			search: ''
		}
	})
	function onclick(data:any){
		method(data.search)
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
			render={({ field: { onChange, onBlur, value, ref }, formState, fieldState }) => (
					<input
					placeholder="Search product..."
					className="w-full py-2 px-16 text-xl border-[1px] border-[#e1e1e1]"
					type="text" onChange={onChange} onBlur={onBlur} value={value} ref={ref}/>
			)}
			/>
		</form>
		
	)
}