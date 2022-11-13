export const GreyButton = ({label, action}: {label:string, action: () => void}) => {
	return (
		<button 
		className="w-full font-bold text-sm text-tr-dark py-2 px-4"
		onClick={action}>
			{label}
		</button>
	)
}