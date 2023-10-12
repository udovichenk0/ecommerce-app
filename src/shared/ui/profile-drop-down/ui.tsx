import { MutableRefObject, ReactNode } from "react"
interface IProps {
  children: ReactNode
  reference: MutableRefObject<null>
}
export const ProfileDropDown = ({ children, reference }: IProps) => {
  return (
    <div
      ref={reference}
      className="absolute -right-1/3 top-10 h-auto w-[150px] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.1)]"
    >
      {children}
    </div>
  )
}
