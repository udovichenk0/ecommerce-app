import { useEffect, useState } from "react";

import { firebase } from "@/shared/api";

import { ProductType } from "../types";

export const useGetSingleProduct = (id?: string) => {
  const [product, setProduct] = useState<any>();
  const getProduct = async (id?: any) => {
    const doc = await firebase.GetSingleProduct(id);
    try {
      setProduct({ ...doc.data(), id: doc.id });
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getProduct(id);
  }, [id]);
  return { product };
};
