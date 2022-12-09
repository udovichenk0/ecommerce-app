import { doc, updateDoc } from "firebase/firestore";

import { db } from "@/shared/api";

import { BasketType } from "../types";

const setBasket = async (basket: BasketType[], id: string) => {
  updateDoc(doc(db, "users", id), { basket });
};

export const api = {
  setBasket,
};
