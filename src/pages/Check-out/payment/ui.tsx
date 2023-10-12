/* eslint-disable import/no-internal-modules */
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion"
import { useNavigate } from "react-router-dom"

import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

import { CheckoutForm } from "@/features/payment"

import { Button } from "@/shared/ui/buttons/main"
import { Layout } from "@/shared/ui/layouts"

import "./styles.css"
import { MasterSvg } from "./assets"
import { VisaSvg } from "./assets/visa"
import { cards } from "./config"

export const Payment = () => {
  const navigate = useNavigate()
  return (
    <Layout header={<Header />}>
      <CheckoutTemplate
        step={3}
        backBtn={
          <Button
            size={'sm'}
            intent={'outline'}>
            Go Back
          </Button>
        }
        nextBtn={
          <Button size="sm" onClick={() => navigate("/checkout/step3")}>
            Next Step
          </Button>
        }
      >
        <Accordion>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="mb-7 flex w-full items-center justify-between border-2 border-[#e1e1e1] bg-[#f1f1f1] p-7">
                  <div>
                    <h2 className="text-xl font-bold text-main-dark">
                      Credit Card
                    </h2>
                    <p className="font-bold text-[#818181]">
                      Pay with Visa, Master Card and other debit or credit card
                    </p>
                  </div>
                  <div className="flex gap-1">
                    <VisaSvg />
                    <MasterSvg />
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div>
                <div className="flex w-full flex-col items-center">
                  <h2 className="mb-3 font-bold text-light-dark">
                    Accepted Cards
                  </h2>
                  <div className="flex gap-2">
                    {cards.map(({ Card }, id) => {
                      return (
                        <div key={id}>
                          <Card />
                        </div>
                      )
                    })}
                  </div>
                  <CheckoutForm />
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </CheckoutTemplate>
    </Layout>
  )
}
