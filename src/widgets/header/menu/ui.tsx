
import { useRef } from "react"

import { BasketItem, basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useClickOutside } from "@/shared/lib/use-click-outside"
import { BasketSkelet } from "@/shared/ui/basket"
import { BaseButton, MenuButton } from "@/shared/ui/buttons"

interface IProps {
	isOpened: boolean
	setOpen: (isOpened: boolean) => void
}
interface IBasket {
	selectedColor: string
	selectedSize: number
	quantity: number
	price:number
	name: string
	image:string
	id:string
	totalPrice: number
}
export const BasketSideMenu = ({isOpened, setOpen}:IProps) => {
	const reference = useRef(null)
	useClickOutside(() => setOpen(false), reference, isOpened)
	const basket = useAppSelector(basketModel.selectors.basket)
	return (	
		<div ref={reference}>
			<BasketSkelet isOpened={isOpened}>
					<div className="p-7 h-full">
						<div className="flex justify-between items-center mb-4">
							<div className="flex items-end gap-3">
								<h2 className="leading-none text-[27px] font-medium">My Basket</h2>
							<span className="font-bold text-light-dark">({basket.length} item)</span>
							</div>
							<MenuButton action={() => setOpen(false)} label={'Close'}/>
						</div>
						<div className="">
							{basket.map(({selectedColor, selectedSize, quantity, price, name, image, id, totalPrice}:BasketType) => {
							return (
								<div key={id}>
									<BasketItem 
									selectedColor={selectedColor}
									selectedSize={selectedSize}
									quantity={quantity}
									price={price}
									name={name}
									image={image}
									id={id}
									totalPrice={totalPrice}
									/>
								</div>
								
							)
						})}
						</div>
						<div className="absolute bottom-0 border-t-[1px] border-[#e1e1e1] w-full left-0 p-7 flex items-center justify-between">
							<div>
								<h2 className="text-[20px] pb-5">Subtotal Amout:</h2>
								<h1 className="font-medium text-[30px]">${countTotalPrice(basket)}</h1>
							</div>
							<BaseButton label={'CHECK OUT'} action={() => console.log('CHECK OUT')}/>
						</div>
					</div>
			</BasketSkelet>
		</div>
	)
}
