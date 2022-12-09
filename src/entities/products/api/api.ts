import {
  collection,
  doc,
  DocumentData,
  documentId,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";

import { db } from "@/shared/api";

const GetSingleProduct = (id: any) => getDoc(doc(db, "products", id));

const getProducts = async (lastRefKey: any) => {
  return new Promise((res, rej) => {
    (async () => {
      if (lastRefKey) {
        try {
          const products: DocumentData[] = [];
          const q = query(
            collection(db, "products"),
            orderBy(documentId()),
            startAfter(lastRefKey),
            limit(4)
          );
          const data = await getDocs(q);
          data.docs.forEach((doc: DocumentData) => {
            return products.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          const lastKey = data.docs[data.size - 1].id;
          res({ products, lastKey });
        } catch (err: any) {
          rej(err.message || "Faild to fetch products");
        }
      } else {
        try {
          const products: DocumentData[] = [];
          const q = query(collection(db, "products"), limit(4));
          const data = await getDocs(q);
          data.docs.forEach((doc) =>
            products.push({ id: doc.id, ...doc.data() })
          );
          const total = data.size;
          const lastRef = data.docs[data.size - 1].id;
          return res({ products, lastRef, total });
        } catch (err: any) {
          rej(err.message || "Faild to fetch products");
        }
      }
    })();
  });
};

export const api = {
  getProducts,
  GetSingleProduct,
};
