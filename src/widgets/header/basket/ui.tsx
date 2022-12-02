
import {  useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BasketItem, basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { viewerModel } from "@/entities/viewer"
import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useClickOutside } from "@/shared/lib/use-click-outside"
import { useAuth } from "@/shared/lib/useAuth"
import { BasketSkelet } from "@/shared/ui/basket"
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
	const profile = useAppSelector(viewerModel.selectors.profile)
	const isSignIn = useAuth(profile)

		useClickOutside(() => !isModelOpened && setOpen(false), reference, isOpened)
		
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
							{basket.map(({selectedColor, selectedSize, quantity, price, name, image, id}:BasketType) => {
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
							<BaseButton label={'CHECK OUT'} 
							action={() => isSignIn? navigate('/checkout/step1') : setModelOpen(true)} disabled={!basket.length}/>
							{isModelOpened && <Modal setModelOpen={setModelOpen}>
								<CheckOutModal setModelOpen={setModelOpen}/>
							</Modal>}
						</div>
					</div>
			</BasketSkelet>
		</div>
	)
}
