import { useEffect } from "react"
import { createPortal } from "react-dom"

interface IProps {
	message:string
	key:string
	onClose: any
	isAlreadyShown: string[]
}

export const useShowNotification = ({message, key, onClose}: any) => {
	return createPortal(
		<div className={`fixed top-20 right-20 text-[#e4a51f] bg-[#fdf7ec] border-1 border-[#e4a51f] z-50`}>
			<div className="p-5 font-medium text-[18px]">
				{message}
			</div>
		</div>,
	document.getElementById('notification-root') as any
	)
}


{/* <div className={`fixed top-20 right-20 text-[#e4a51f] bg-[#fdf7ec] border-1 border-[#e4a51f] z-50`}>
<div className="p-5 font-medium text-[18px]">
	{message}
</div>
</div> */}