export const LightButton = ({label, action}:{label:string, action: () => void}) => {
	return (
		<button onClick={action} className="text-base py-[8px] px-[13px] bg-lgrey text-[#7d7d7d] border-2 border-[#e1e1e1] font-bold">
			{label}
		</button>
	)
}