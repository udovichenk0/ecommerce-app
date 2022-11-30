export const BlackBtnSm = ({label, action}:{label:string, action:() => void}) => {
	return (
		<button onClick={action}className="py-[8px] px-[13px] text-sm bg-main-dark border-2 border-main-dark text-white font-medium">
			{label}
		</button>
	)
}