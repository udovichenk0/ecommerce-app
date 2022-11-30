import { useNavigate } from "react-router-dom"

import { BasketItem, basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { useAppSelector } from "@/shared/lib/redux-std"
import { BlackBtnSm, LGreyButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

export const SummaryOrder = () => {
	const basket = useAppSelector(basketModel.selectors.basket)
	const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
				<CheckoutTemplate 
				step={1} 
				backBtn={<LGreyButton label="Continue Shopping" action={() => navigate('/', {replace:true})}/>}
				nextBtn={<BlackBtnSm label="Next Step" action={() => navigate('/checkout/step2')}/>}>
					<div className="w-full flex flex-col items-center">
						<div className="w-full flex flex-col items-center mb-10">
							<>
								<h2 className="text-2xl font-bold mb-5">Order Summary</h2>
								<p>Review items in your basket.</p>
							</>
						</div>
						<div className="w-[900px] mb-5">
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
					</div>
				</CheckoutTemplate>
				
		</Layout>
	)
}