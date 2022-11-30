import { ReactNode } from "react"

import { StepLine } from "@/shared/ui/step-line"

interface IProps {
	children: ReactNode
	step: number
	backBtn:any
	nextBtn: any
}
export const CheckoutTemplate = ({children, step, backBtn, nextBtn}: IProps) => {
	return (
		<div className="w-full flex flex-col items-center">
			<div className="w-[900px]">
				<StepLine step={step}/>
				{children}
				<div className="flex justify-between items-center">
					{backBtn}
					{nextBtn}
				</div>
			</div>
		</div>
	)
}