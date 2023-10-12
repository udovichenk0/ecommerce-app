import { correctLength } from "@/shared/lib/correct-length"

import { Cart } from "./cart-icon"

interface IProps {
  setOpen: (isOpened: boolean) => void
  basketLength: number
}
export const ShopBag = ({ setOpen, basketLength }: IProps) => {
  return (
    <button className="relative mr-12 w-6" onClick={() => setOpen(true)}>
      {!!basketLength && (
        <span className="absolute -top-1/3 h-[20px] w-[20px] rounded-full bg-[#f72d2dfb] text-white">
          {correctLength(basketLength)}
        </span>
      )}

      <Cart />
    </button>
  )
}
