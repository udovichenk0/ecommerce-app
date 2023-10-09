
import {  useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BasketItem, basketModel } from "@/entities/basket"
import { Basket } from "@/entities/basket/types"
import { sessionModel } from "@/entities/session"
import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useClickOutside } from "@/shared/lib/use-click-outside"
import { BaseButton, MenuButton } from "@/shared/ui/buttons"
import { Modal } from "@/shared/ui/modal"
import { CheckOutModal } from "@/shared/ui/side-bar-menu"

interface IProps {
	isOpened: boolean
	setOpen: (isOpened: boolean) => void
}

export const BasketSideMenu = ({isOpened, setOpen}:IProps) => {
	const [isModelOpened, setModelOpen] = useState<boolean>(false)
	const navigate = useNavigate()
	const reference = useRef<HTMLHeadingElement>(null)

	const basket = useAppSelector(basketModel.selectors.basket)
	const profile = useAppSelector(sessionModel.selectors.profile)

	useClickOutside(() => !isModelOpened && setOpen(false), reference, isOpened)
	if(!basket?.length) return null
	return (
		<div ref={reference}>
			<div className={`transition-all duration-300 ease h-full z-50 fixed right-0 top-0 w-full md:w-[700px] bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
				${isOpened? 'right-0' : '-right-full'}
				`}>
									<div className="p-7 h-full">
						<div className="flex justify-between items-center mb-4">
							<div className="flex items-end gap-3">
								<h2 className="leading-none text-[27px] font-medium">My Basket</h2>
								<span className="font-bold text-light-dark">({basket?.length} item)</span>
							</div>
							<MenuButton action={() => setOpen(false)} label={'Close'}/>
						</div>
						<div>
							{basket?.map(({selectedColor, selectedSize, quantity, price, name, image, id}:Basket) => {
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
									/>
								</div>
								
							)
						})}
						</div>
						<div className="absolute bottom-0 border-t-[1px] border-[#e1e1e1] w-full left-0 p-7 flex items-center justify-between">
							<div className="flex items-center gap-5">
								<h2 className="text-[20px]">Subtotal Amout:</h2>
								<h1 className="font-medium text-[30px]">${countTotalPrice(basket)}</h1>
							</div>
							<BaseButton size="lg" label={'CHECK OUT'} 
							action={() => profile.name? navigate('/checkout/step1') : setModelOpen(true)} disabled={!basket.length}/>
							{isModelOpened && <Modal setModelOpen={setModelOpen}>
								<CheckOutModal setModelOpen={setModelOpen}/>
							</Modal>}
						</div>
					</div>
			</div>
		</div>
	)
}
