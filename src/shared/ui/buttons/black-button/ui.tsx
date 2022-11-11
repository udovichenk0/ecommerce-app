export const BaseButton = ({action, label}:any) => {
	return (
		<button onClick={action}
		className="py-[15px] px-[20px] text-base bg-[#101010] border-2 border-[#101010] text-white font-bold">
			{label}
		</button>
	)
}