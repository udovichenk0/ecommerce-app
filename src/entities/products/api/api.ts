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
import { Product } from "@/shared/api/product";

const getProducts = async (lastRefKey?: string) => {
  if (lastRefKey) {
    const products: Product[] = [];
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
    const lastRef = data.docs[data.size - 1].id;
    const total = data.size
    return {
      products,
      lastRef,
      total
    }
  }
  else {
    const products: Product[] = [];
    const q = query(collection(db, "products"), limit(4));
    const data = await getDocs(q);
    data.docs.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() } as Product;
      return products.push(product)
    }
    );
    const total = data.size;
    const lastRef = data.docs[data.size - 1].id;
    return { 
      products, 
      lastRef, 
      total
    };
  }
};

export const api = {
  getProducts,
};
