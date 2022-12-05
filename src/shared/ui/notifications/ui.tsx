import { useEffect, useState } from "react";
import { createPortal } from "react-dom"

import './notification.css'
import { Types } from "./config"

interface IProps {
	type?: string
	message: string
	onDelete:(id:string) => void
	id: string
}

export const Notification = ({
	type = Types.info,
	message,
	onDelete,
	id
}:IProps) => {
	useEffect(() => {
		const timeoutId = setTimeout(() => onDelete(id), 4000);
		return () => {
			clearTimeout(timeoutId);
		};
	}, [onDelete]);
	return (
		<div className={`${type} w-[350px]`}>
			<div className="px-6 py-5">
				<h2 className="font-medium text-[20px]">{message}</h2>
			</div>
		</div>
	)
}
