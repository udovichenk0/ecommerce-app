export const SubmitButton = ({label, action}:{label: string, action: any}) => {
	return (
		<button onSubmit={action}
		className={`font-bold text-base py-[8px] px-[13px] bg-[#101010] border-2 border-[#101010] text-white`}>
			{label}
		</button>
	)
}