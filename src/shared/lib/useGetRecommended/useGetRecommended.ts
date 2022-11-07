import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { firebase } from "@/shared/api";

export const useGetRecommendedProducts = () => {
  const [recommended, setRecommended] = useState<any[]>([]);
  const [isRecommendLoading, setLoading] = useState<boolean>(false);
  const getRecommended = async () => {
    const data = await firebase.getRecommendedProducts();
    const items: DocumentData[] = [];
    try {
      setLoading(true);
      if (data.empty) setLoading(false);
      else {
        data.docs.forEach((doc) => items.push({ ...doc.data(), id: doc.id }));
        setRecommended(items);
      }
    } catch (error: any) {
      throw new Error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { getRecommended, isRecommendLoading, recommended };
};
