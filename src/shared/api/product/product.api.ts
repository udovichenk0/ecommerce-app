import {
  query,
  collection,
  orderBy,
  documentId,
  startAfter,
  limit,
  getDocs,
  DocumentData,
  where,
  getDoc,
  doc,
} from "firebase/firestore"

import { db } from "../config"

import { ProductDto } from "./types"

export const getProducts = async (lastRefKey?: string) => {
  if (lastRefKey) {
    const products: ProductDto[] = []
    const q = query(
      collection(db, "products"),
      orderBy(documentId()),
      startAfter(lastRefKey),
      limit(4),
    )
    const data = await getDocs(q)
    data.docs.forEach((doc: DocumentData) => {
      return products.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    const lastRef = data.docs[data.size - 1].id
    const total = data.size
    return {
      products,
      lastRef,
      total,
    }
  } else {
    const products: ProductDto[] = []
    const q = query(collection(db, "products"), limit(4))
    const data = await getDocs(q)
    data.docs.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() } as ProductDto
      return products.push(product)
    })
    const total = data.size
    const lastRef = data.docs[data.size - 1].id
    return {
      products,
      lastRef,
      total,
    }
  }
}

export const getFeaturedProducts = async () => {
  const products = [] as ProductDto[]
  const data = await getDocs(
    query(
      collection(db, "products"),
      where("isFeatured", "==", true),
      limit(11),
    ),
  )
  data.docs.forEach((doc) => {
    const data = { ...doc.data(), id: doc.id } as ProductDto
    products.push(data)
  })
  return products
}
export const getRecommendedProducts = async () => {
  const products = [] as ProductDto[]
  const data = await getDocs(
    query(
      collection(db, "products"),
      where("isRecommended", "==", true),
      limit(11),
    ),
  )
  data.docs.forEach((doc) => {
    const data = { ...doc.data(), id: doc.id } as ProductDto
    products.push(data)
  })
  return products
}
export const getSingleProduct = async (id: string) => {
  const product = await getDoc(doc(db, "products", id))
  return { ...product.data(), id: product.id } as ProductDto
}

export const searchProducts = async (searchName: string) => {
  try {
    const searchItems: ProductDto[] = []
    if (searchName[0].toUpperCase() != searchName[0])
      searchName = searchName[0].toUpperCase() + searchName.slice(1)
    const data = await getDocs(
      query(
        collection(db, "products"),
        where("name", ">=", searchName),
        where("name", "<=", searchName + "\uf8ff"),
        limit(11),
      ),
    )
    data.docs.forEach((doc) => {
      const product = doc.data() as ProductDto
      searchItems.push({ ...product, id: doc.id })
    })
    // throw new Error()
    return searchItems
  } catch (error: any) {
    throw new Error(error.message)
  }
}
