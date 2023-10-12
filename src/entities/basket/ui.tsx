import { useAction } from "@/shared/lib/redux-std"
import { MenuButton } from "@/shared/ui/buttons"

import { actions } from "./basket.model"

interface BasketItemProps {
  selectedColor: string
  selectedSize: number
  quantity: number
  price: number
  name: string
  image: string
  id: string
}
export const BasketItem = ({
  selectedColor,
  selectedSize,
  quantity,
  price,
  name,
  image,
  id,
}: BasketItemProps) => {
  const addQuantity = useAction(actions.addQuantity)
  const removeQuantity = useAction(actions.removeQuantity)
  const removeFromBasket = useAction(actions.removeFromBasket)
  return (
    <div className="mb-5 flex h-[116px] items-center justify-between">
      <div className="mr-4 inline-flex flex-col gap-2 max-sm:mr-2">
        <MenuButton action={() => addQuantity(id)} label={"+"} />
        <MenuButton
          action={() => removeQuantity(id)}
          label={"-"}
          disable={quantity == 1}
        />
      </div>
      <div className="mr-4 flex h-[90px] w-[90px] items-center max-[590px]:hidden">
        <img className="h-auto w-full" src={image} alt={name} />
      </div>
      <div className="mr-8 flex gap-6 max-sm:mr-2 max-sm:items-center max-sm:gap-3 sm:flex-col">
        <h2 className="text-xl font-medium">{name}</h2>
        <div className="flex gap-4 max-sm:flex-col">
          <h2 className="text-lg text-[#8d8d8d]">
            Quantity: <span className="text-black">{quantity}</span>
          </h2>
          <h2 className="text-lg text-[#8d8d8d]">
            Size: <span className="text-black">{selectedSize} mm</span>
          </h2>
          <h2 className="flex items-center gap-2 text-lg text-[#8d8d8d]">
            Color:{" "}
            <div
              style={{ backgroundColor: selectedColor }}
              className={`mb-1 h-[15px] w-[15px] rounded-full`}
            ></div>{" "}
          </h2>
        </div>
      </div>
      <span className="mr-2 text-xl font-bold max-sm:mr-1">
        ${price * quantity}
      </span>
      <MenuButton action={() => removeFromBasket(id)} label={"x"} />
    </div>
  )
}
