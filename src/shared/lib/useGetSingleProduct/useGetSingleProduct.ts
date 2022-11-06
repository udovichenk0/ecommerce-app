import { firebase } from "@/shared/api";
import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";

export const useGetSingleProduct = (id?: string) => {
  const [product, setProduct] = useState<any>();
  const getProduct = async (id?: any) => {
    const doc = await firebase.GetSingleProduct(id);
    const items: DocumentData = [];
    try {
      setProduct(doc.data());
    } catch (error) {}
  };
  useEffect(() => {
    getProduct(id);
  }, []);

  return { product };
};
