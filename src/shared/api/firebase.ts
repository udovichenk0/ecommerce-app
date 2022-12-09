import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";

import { db } from "./config";

//PRODUCTS

const getFeaturedProducts = async () =>
  await getDocs(
    query(
      collection(db, "products"),
      where("isFeatured", "==", true),
      limit(11)
    )
  );

const getRecommendedProducts = async () =>
  await getDocs(
    query(
      collection(db, "products"),
      where("isRecommended", "==", true),
      limit(11)
    )
  );

const GetSingleProduct = async (id: string) => getDoc(doc(db, "products", id));
export { getFeaturedProducts, getRecommendedProducts, GetSingleProduct };
