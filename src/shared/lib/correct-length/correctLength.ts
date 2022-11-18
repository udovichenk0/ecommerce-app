export const correctLength = (length: number): string | number =>
  length > 9 && length ? "9+" : length;
