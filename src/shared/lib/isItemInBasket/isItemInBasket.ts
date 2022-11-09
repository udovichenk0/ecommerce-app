export const isItemInBasket = (basket: any[], id?: string) => {
  return basket.find((item) => item.id === id);
};
