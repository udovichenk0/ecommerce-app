import { useEffect } from "react";
import { createPortal } from "react-dom"

import './notification.css'
import { Color } from "./config"


export const Notification = ({
	color = Color.info,
	message,
	onDelete,
	id
}:any) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => onDelete(id), 2000);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [onDelete]);
	return (
		<div className={`${color}`}>
			<div className="p-5 font-medium text-[18px]">
				{message}
			</div>
		</div>
	)
}




// export const Notification = ({
// 	color = Color.info,
// 	message,
// 	onDelete
// }:any) => {
// 	useEffect(() => {
// 		const timeoutId = setTimeout(() => onDelete(false), 2000);
// 		return () => {
// 			clearTimeout(timeoutId);
// 		};
// 	}, [onDelete]);
// 	return createPortal(
// 		<div className={`fixed top-20 right-20 ${color} z-50`}>
// 			<div className="p-5 font-medium text-[18px]">
// 				{message}
// 			</div>
// 		</div>,
// 		document.getElementById('notification-root') as any
// 	)
// }
