
import { useEffect, useRef } from "react"

import { useClickOutside } from "@/shared/lib/use-click-outside"
import { BasketSkelet } from "@/shared/ui/basket"
interface IProps {
	isOpened: boolean
	setOpen: (isOpened: boolean) => void
}
export const BasketSideMenu = ({isOpened, setOpen}:IProps) => {
	const reference = useRef(null)
	const el = reference?.current;
	useClickOutside(() => setOpen(false), el,reference, isOpened)
	return (
		<div ref={reference}>
			<BasketSkelet isOpened={isOpened}>
					<div>123</div>
			</BasketSkelet>
		</div>
	)
}
