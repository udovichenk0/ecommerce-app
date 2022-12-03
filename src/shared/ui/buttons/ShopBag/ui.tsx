import { correctLength } from "@/shared/lib/correct-length"

import { Cart } from "./icon"


interface IProps {
	setOpen: (isOpened: boolean) => void
	basketLength:number
}
export const ShopBag = ({setOpen, basketLength}: IProps) => {

	return (
		<button className='w-6 mr-12 relative' onClick={() => setOpen(true)}>
			{!!basketLength && <span className="w-[20px] h-[20px] bg-[#f72d2dfb] absolute text-white rounded-full -top-1/3"
			>{correctLength(basketLength)}</span>}
			
			<Cart/>
		</button>
	)
}