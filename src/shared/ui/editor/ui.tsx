import { PropsType } from "./type"

export const InputEditor = ({register, label, placeholder, name, disabled}:PropsType) => {
	return (
		<label className="w-full" htmlFor='editor'>{label}
			<input disabled={disabled}
			placeholder={placeholder}
			className={`w-full py-[5px] mt-2 px-6 border-[1px] border-[#c5c5c5] bg-[#f9f9f9] outline-none text-[22px] font-medium ${disabled && 'text-[#696868]'}`}
			{...register(name)} id='editor' type="text" />
		</label>

	)
}