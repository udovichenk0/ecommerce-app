interface IProps {
	action: () => void
	label: string
	disabled?: boolean
}

export const BaseButton = ({action, label, disabled}:IProps) => {
	return (
		<button disabled={disabled} onClick={action}
		className={`py-[15px] px-[20px] bg-[#101010] border-2 border-[#101010] text-white font-bold ${disabled && 'opacity-50'}`}>
			{label}
		</button>
	)
}