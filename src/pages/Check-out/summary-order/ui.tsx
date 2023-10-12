import { useNavigate } from "react-router-dom"

import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

import { BasketItem, basketModel } from "@/entities/basket"
import { BasketProduct } from "@/entities/basket/types"

import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Button } from "@/shared/ui/buttons/main"
import { Layout } from "@/shared/ui/layouts"

export const SummaryOrder = () => {
  const basket = useAppSelector(basketModel.selectors.basket)
  const navigate = useNavigate()
  return (
    <Layout header={<Header />}>
      <CheckoutTemplate
        step={1}
        backBtn={
          <Button 
            size={'sm'} 
            intent={'outline'}
            onClick={() => navigate("/", { replace: true })}
            >
            Continue Shopping
          </Button>
        }
        nextBtn={
          <Button size={"sm"} onClick={() => navigate("/checkout/step2")}>
            Next Step
          </Button>
        }
      >
        <div className="mb-10 flex w-full flex-col items-center">
          <>
            <h2 className="mb-5 text-2xl font-bold">Order Summary</h2>
            <p>Review items in your basket.</p>
          </>
        </div>
        <div className="mb-5 w-full">
          {basket.map(
            ({
              selectedColor,
              selectedSize,
              quantity,
              price,
              name,
              image,
              id,
            }: BasketProduct) => {
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
            },
          )}
        </div>
        <div className="mb-5 flex items-center gap-2 self-end">
          <p className="text-xl font-bold">Subtotal:</p>
          <p className="text-xl font-medium">${countTotalPrice(basket)}</p>
        </div>
      </CheckoutTemplate>
    </Layout>
  )
}
