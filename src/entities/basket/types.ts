import { ProductId } from "@/shared/api/product";

export type Basket = {
  description: string;
  id: ProductId;
  image: string;
  imageCollection: string[];
  isFeatured: boolean;
  isRecommended: boolean;
  name: string;
  price: number;
  subtitle: string;
  quantity: number;
  selectedColor: string;
  selectedSize: number;
  sizes: number[];
};
