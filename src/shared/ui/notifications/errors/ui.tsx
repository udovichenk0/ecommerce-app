interface IProps {
	method:any,
	message: string | null
}

export const ErrorNotifyDisplay = ({method, message}:IProps) => {
	return (
		<div className="absolute right-10 top-0 border-[1px] bg-white border-error w-64 flex flex-col items-center p-5 font-bold text-medium">
			<div className="w-full flex flex-col items-center">
				<div className="text-error mb-3">{message}</div>
				<button 
				onClick={method}
				className="text-white py-3 px-4 bg-black">Try again!</button>
			</div>
		</div>
	)
}