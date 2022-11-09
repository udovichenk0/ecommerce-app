interface IProps {
	label: string
	action: any
}
export const UpdateCart = ({label, action}: IProps) => {
	return (
		<button
		className="bg-black font-bold py-3 px-4 text-white"
		onClick={action}>
			{label}
		</button>
	)
}