import { query, collection, orderBy, documentId, startAfter, limit, getDocs, DocumentData, where, getDoc, doc } from "firebase/firestore";

import { db } from "../config";

import { Product } from "./types";

export const getProducts = async (lastRefKey?: string) => {
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

export const getFeaturedProducts = async () => {
  const products = [] as Product[]
  const data = await getDocs(
    query(
      collection(db, "products"),
      where("isFeatured", "==", true),
      limit(11)
    )
  );
  data.docs.forEach(doc => {
    const data = {...doc.data(), id: doc.id} as Product
    products.push(data)
  })
  return products
}
export const getRecommendedProducts = async () => {
  const products = [] as Product[]
  const data = await getDocs(
    query(
      collection(db, "products"),
      where("isRecommended", "==", true),
      limit(11)
    )
  );
  data.docs.forEach(doc => {
    const data = {...doc.data(), id: doc.id} as Product
    products.push(data)
  })
  return products
}
export const getSingleProduct = async (id: string) => {
  const product = await getDoc(doc(db, "products", id))
  return {...product.data(), id: product.id} as Product
};