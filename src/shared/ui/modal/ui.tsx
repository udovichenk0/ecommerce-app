import { ReactNode } from "react"
import { createPortal } from "react-dom"

interface IProps {
  setModelOpen: (prop: boolean) => void
  children: ReactNode
}
export const Modal = ({ children, setModelOpen }: IProps) => {
  return createPortal(
    <div className="fixed top-0 left-0 z-[101] h-full w-full">
      <div
        onClick={(event: any) =>
          !event.target.closest("#modal") && setModelOpen(false)
        }
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-[#ffffffbf]"
      >
        {children}
      </div>
    </div>,
    document.querySelector("#modal-root") as any,
  )
}
