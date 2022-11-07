import { useEffect, useState } from "react";

import { firebase } from "@/shared/api";

export const useGetSingleProduct = (id?: string) => {
  const [product, setProduct] = useState<any>();
  const getProduct = async (id?: any) => {
    const doc = await firebase.GetSingleProduct(id);
    try {
      setProduct(doc.data());
    } catch (error) {
      console.log("Error");
    }
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return { product };
};
