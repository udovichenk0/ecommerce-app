export const countTotalPrice = (basket: any) => {
  return basket.reduce(
    (acum: number, prev: any) => (acum += prev.price * prev.quantity),
    0
  );
};
