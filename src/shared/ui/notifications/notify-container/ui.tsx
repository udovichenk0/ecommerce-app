import { PropsWithChildren, ReactNode } from "react"
import { createPortal } from "react-dom"

export const NotifyContainer = ({children}:PropsWithChildren) => {
	return createPortal(
		<div className="fixed top-20 right-20">
			{children}
		</div>,
		document.getElementById('notification-root') as any
	)
}