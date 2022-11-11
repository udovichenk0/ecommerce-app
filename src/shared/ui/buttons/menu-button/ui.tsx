interface IProps {
	action: any
	label: string
	disable?: boolean
}
export const MenuButton = ({action, label, disable}:IProps) => {
	return (
		<button
		disabled={disable}
		className="border-[1px] border-[#e1e1e1] text-black font-medium text-[18px] px-6 py-3"
		onClick={action}>
			{label}
		</button>
	)
}