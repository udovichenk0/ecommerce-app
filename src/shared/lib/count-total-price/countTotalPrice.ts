import { BasketType } from "../types"

export const countTotalPrice = (basket: BasketType[]) => {
  return basket.reduce(
    (acum: number, prev: BasketType) => (acum += prev.price * prev.quantity),
    0,
  )
}
