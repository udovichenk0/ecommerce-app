import { updateDoc, doc } from "firebase/firestore";

import { db } from "../config";
import { UserId } from "../session";
type Basket = {
  description: string;
  id: string;
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
}
export const setBasket = async (basket: Basket[], id: UserId) => {
  const response = await updateDoc(doc(db, "users", id), { basket });
  return response
};
