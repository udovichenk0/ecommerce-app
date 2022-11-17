import { MutableRefObject, PropsWithChildren, ReactNode } from "react";
interface IProps {
	children: ReactNode
	reference: MutableRefObject<null>
}
export const ProfileDropDown = ({children, reference}: IProps) => {
	return <div ref={reference}
	className="bg-white w-[150px] h-auto shadow-[0_5px_12px_rgba(0,0,0,0.1)] absolute -right-1/3 top-10">
		{children}
	</div>
}