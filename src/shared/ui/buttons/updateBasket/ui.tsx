interface IProps {
	label: string
	action: () => void
	style: string
}
export const UpdateCart = ({label, action, style}: IProps) => {
	return (
		<button
		className={`py-3 px-4 font-bold
		${style =='add'? 'bg-black text-white border-[1px] border-black hover:bg-main-dark transition-all duration-200 ease' 
		: 'text-light-dark bg-white border-[1px] border-[#e1e1e1] hover:bg-[#e1e1e1] transition-all duration-200 ease'}`}
		onClick={action}>
			{label}
		</button>
	)
}