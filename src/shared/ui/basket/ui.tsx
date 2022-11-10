import { PropsWithChildren } from "react"

export const BasketSkelet = ({children, isOpened}:any) => {
	return (
		<div className={`transition-all duration-300 ease h-screen z-50 fixed right-0 top-0 w-[500px] bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
		${isOpened? 'right-0' : '-right-full'}
		`}>
			{children}
		</div>
	)
}