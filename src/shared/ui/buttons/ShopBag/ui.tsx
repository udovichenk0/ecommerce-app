import { useEffect, useRef } from "react"

// eslint-disable-next-line import/no-internal-modules
import { Cart } from "@/shared/assets/bag"

interface IProps {
	setOpen: (isOpened: boolean) => void
	basketLength:number
}
export const ShopBag = ({setOpen, basketLength}: IProps) => {

	return (
		<button className='w-6 mr-12 menu relative' onClick={() => setOpen(true)}>
			{!!basketLength && <span className="w-[20px] h-[20px] bg-[#f72d2dfb] absolute text-white rounded-full -top-1/3"
			>{basketLength}</span>}
			
			<Cart/>
		</button>
	)
}