import { PropsType } from "./type"

export const InputEditor = ({register, label, placeholder, name, disabled, errors}:PropsType) => {
	return (
		<div>
			{errors? <p className="text-error font-medium px-3">{errors?.name?.message}</p> : <label className="w-full px-3" htmlFor='editor'>{label}</label>}
			<input disabled={disabled}
			placeholder={placeholder}
			className={`w-full mt-2 py-[5px] px-6 border-[1px] border-[#c5c5c5] bg-[#f9f9f9] outline-none text-[22px] font-medium ${disabled && 'text-[#696868]'}`}
			{...register(name)} id='editor' type="text" />
		</div>
	)
}