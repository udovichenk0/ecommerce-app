import { BasketType } from "../types";

export const isItemInBasket = (basket: BasketType[], id?: string) => {
  return basket.find((item) => item.id === id);
};
