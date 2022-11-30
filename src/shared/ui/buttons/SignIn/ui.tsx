export const LGreyButton = ({label, action}:{label:string, action: () => void}) => {
	return (
		<button onClick={action} className="py-[8px] px-[13px] text-sm bg-lgrey text-[#7d7d7d] border-2 border-[#e1e1e1] font-medium">
			{label}
		</button>
	)
}