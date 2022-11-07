type propsType = {
	onChange: any
	value: any
	inputRef: any
	error: any
	label: string
	name: string
	placeholder: any
	onBlur: any
}
export const TextInput = ({onChange, value, inputRef, error, label, name, placeholder, onBlur}: propsType) => {
	return (
		<div className="flex flex-col">
			{error? <label className="py-[10px] px-3 text-sm text-error font-bold " htmlFor={name}>{error.message}</label>	
			: <label className="py-[10px] px-3 text-sm text-[#696868] font-bold " htmlFor={name}>{label}</label>	

		}
			<input
			className={`py-[10px] px-4 outline-none border-[1px] bg-[#f9f9f9] font-bold ${error ? 'border-error' : 'border-[#c5c5c5]'}`}
			type="text" name={name} value={value} onBlur={onBlur} onChange={onChange} placeholder={placeholder} ref={inputRef}/>
		</div>
	)
}