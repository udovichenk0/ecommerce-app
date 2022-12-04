import { useEffect, useState } from "react"

import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { useShowNotification } from "@/shared/lib/show-notification"
import {Notification} from '@/shared/ui/notifications'

import { notifyModel } from ".."
import './style.css'


export const NotificationPopup = () => {
	const notifications = useAppSelector(notifyModel.selectors.notifications)
	const onClose = useAction(notifyModel.actions.closeSnackbar)
	return (
		<div className="fixed top-5 right-14">
			{notifications.map((alert) => {
				return (
					<div key={alert.key} className='mb-7 transition-all duration-500 animation'>
						<Notification color={'success'} message={alert.message} onDelete={onClose} id={alert.key}/>
					</div>
				)
			})}
		</div>
	)
}

