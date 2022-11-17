
import { ReactNode } from "react"
import {createPortal} from "react-dom"


interface IProps {
	setModelOpen: (prop: boolean) => void
	children: ReactNode
}
export const Modal = ({children, setModelOpen}: IProps) => {
	return createPortal(
		<div 
		className="fixed w-full h-full top-0 left-0 z-[101]">
			<div onClick={(event:any) => !event.target.closest("#modal") && setModelOpen(false)} className="bg-[#ffffffbf] absolute w-full h-full left-0 top-0 flex items-center justify-center">
				{children}
			</div>
		</div>,
		document.querySelector("#modal-root") as any
	);
}