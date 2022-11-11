export const countTotalPrice = (basket: any) => {
  return basket.reduce(
    (acum: number, prev: any) => (acum += prev.totalPrice),
    0
  );
};
