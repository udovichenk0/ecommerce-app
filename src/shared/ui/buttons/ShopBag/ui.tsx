import { useEffect, useRef } from "react"

// eslint-disable-next-line import/no-internal-modules
import { Cart } from "@/shared/assets/bag"

interface IProps {
	setOpen: (isOpened: boolean) => void
}
export const ShopBag = ({setOpen}: IProps) => {

	return (
		<button className='w-6 mr-12 menu' onClick={() => setOpen(true)}>
			<Cart/>
		</button>
	)
}