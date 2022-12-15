/* eslint-disable import/no-internal-modules */
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import { useNavigate } from "react-router-dom"

import { CheckoutForm } from "@/features/payment"
import { BaseButton, LightButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

import './styles.css'
import { MasterSvg } from "./assets"
import { VisaSvg } from "./assets/visa"
import { cards } from "./config"

export const Payment = () => {
	const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
		<CheckoutTemplate 
		step={3} 
		backBtn={<LightButton label="Go Back" action={() => navigate(-1)}/>}
		nextBtn={<BaseButton size="md" label="Next Step" action={() => navigate('/checkout/step3')}/>}>
			<Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
						<div className="w-full bg-[#f1f1f1] border-2 border-[#e1e1e1] p-7 flex items-center justify-between mb-7">
							<div>
								<h2 className="font-bold text-xl text-main-dark">Credit Card</h2>
								<p className="font-bold text-[#818181]">Pay with Visa, Master Card and other debit or credit card</p>
							</div>
							<div className="flex gap-1">
								<VisaSvg/>
								<MasterSvg/>
							</div>
						</div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div>
						<div className="w-full flex flex-col items-center">
							<h2 className="text-light-dark mb-3 font-bold">Accepted Cards</h2>
							<div className="flex gap-2">
								{cards.map(({Card}, id) => {
									return (
										<div key={id}>
											<Card/>
										</div>
									)
								})}
							</div>
							<CheckoutForm/>
						</div>
					</div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
		</CheckoutTemplate>
</Layout>
	)
}