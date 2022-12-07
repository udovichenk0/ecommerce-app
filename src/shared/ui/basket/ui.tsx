import { ReactNode } from "react"
interface IProps {
	children: ReactNode
	isOpened: boolean
}
export const BasketSkelet = ({children, isOpened}:IProps) => {
	return (
		<div className={`transition-all duration-300 ease h-full z-50 fixed right-0 top-0 w-full md:w-[700px] bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
		${isOpened? 'right-0' : '-right-full'}
		`}>
			{children}
		</div>
	)
}