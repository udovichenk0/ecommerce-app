import { useEffect, useState } from "react";
import { createPortal } from "react-dom"

import './notification.css'
import { Color } from "./config"


export const BasketNotification = ({
	color = Color.info,
	message,
	onDelete
}:any) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => onDelete(false), 1200);
		
		return () => {
			clearTimeout(timeoutId);
		};
	}, [onDelete]);

	return createPortal(
		<div className={`fixed top-20 right-20 ${color} z-50`}>
			<div className="p-5 font-medium text-[18px]">
				{message}
			</div>
		</div>,
		document.getElementById('notification-root') as any
	)
}

//${color == 'success' && 'bg-[#3b9620]'} ${color == 'warning' && 'bg-[#e4a51f]'}