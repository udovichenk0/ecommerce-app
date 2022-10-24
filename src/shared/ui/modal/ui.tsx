import { PropsWithChildren } from "react"
import { SignIn } from "../buttons/SignIn"

type propsType = {
	title: string
	children: PropsWithChildren
}

export const Modal = ({children, title}:any) => {
	return (
		<div className="w-[800px] h-[400px] border-2 border-[#c5c5c5]">
				<div className="p-8 text-main-dark font-bold text-xl">{title}</div>
				{children}
				<div className="w-full h-16 gap-7 border-t-2 border-[#c5c5c5] flex items-center justify-center bg-lgrey">
					<p>Don't have an account?</p>
					<SignIn/>
				</div>
			
		</div>
	)
}