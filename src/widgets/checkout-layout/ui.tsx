import { ReactNode } from "react"

import { StepLine } from "@/shared/ui/step-line"

interface IProps {
  children: ReactNode
  step: number
  backBtn: any
  nextBtn: any
}
export const CheckoutTemplate = ({
  children,
  step,
  backBtn,
  nextBtn,
}: IProps) => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-[900px]">
        <div className="mb-5 flex w-full flex-col items-center">
          <StepLine step={step} />
          {children}
        </div>
        <div className="flex items-center justify-between">
          {backBtn}
          {nextBtn}
        </div>
      </div>
    </div>
  )
}
