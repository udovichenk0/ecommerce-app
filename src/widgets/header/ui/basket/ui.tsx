import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { BasketProduct, BasketItem, basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useClickOutside } from "@/shared/lib/use-click-outside"
import { MenuButton } from "@/shared/ui/buttons"
import { Modal } from "@/shared/ui/modal"
import { CheckOutModal } from "@/shared/ui/side-bar-menu"
import { Button } from "@/shared/ui/buttons/main"

interface IProps {
  isOpened: boolean
  setOpen: (isOpened: boolean) => void
}

export const BasketSideMenu = ({ isOpened, setOpen }: IProps) => {
  const [isModelOpened, setModelOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const reference = useRef<HTMLHeadingElement>(null)

  const basket = useAppSelector(basketModel.selectors.basket)
  const profile = useAppSelector(sessionModel.selectors.profile)
  const checkout = () => {
    if (profile.name) {
      navigate("/checkout/step1")
    } else {
      setModelOpen(true)
    }
  }
  useClickOutside(() => !isModelOpened && setOpen(false), reference, isOpened)

  return (
    <div ref={reference}>
      <div
        className={`ease fixed top-0 z-50 h-full w-full bg-white shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-300 md:w-[700px]
				${isOpened ? "right-0" : "-right-full"}
				`}
      >
        <div className="h-full p-7">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-end gap-3">
              <h2 className="text-[27px] font-medium leading-none">
                My Basket
              </h2>
              <span className="font-bold text-light-dark">
                ({basket?.length} item)
              </span>
            </div>
            <MenuButton action={() => setOpen(false)} label={"Close"} />
          </div>
          <div>
            {basket?.map(
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
          <div className="absolute bottom-0 left-0 flex w-full items-center justify-between border-t-[1px] border-[#e1e1e1] p-7">
            <div className="flex items-center gap-5">
              <h2 className="text-[20px]">Subtotal Amout:</h2>
              <h1 className="text-[30px] font-medium">
                ${countTotalPrice(basket)}
              </h1>
            </div>
            <Button onClick={checkout} size={"md"}>
              CHECK OUT
            </Button>
            {isModelOpened && (
              <Modal setModelOpen={setModelOpen}>
                <CheckOutModal setModelOpen={setModelOpen} />
              </Modal>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
