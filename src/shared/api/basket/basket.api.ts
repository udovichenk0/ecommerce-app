import { updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore"

import { db } from "../config"
import { ProductId } from "../product"
import { UserId } from "../session"
type Basket = {
  description: string
  id: string
  image: string
  imageCollection: string[]
  isFeatured: boolean
  isRecommended: boolean
  name: string
  price: number
  subtitle: string
  quantity: number
  selectedColor: string
  selectedSize: number
  sizes: number[]
}
export const setBasket = async (basket: Basket[], id: UserId) => {
  const response = await updateDoc(doc(db, "users", id), { basket })
  return response
}

export const addProductToBasket = async (product: Basket, id: UserId) => {
  await updateDoc(doc(db, "users", id), {
    basket: arrayUnion(product),
  })
  const user = await getDoc(doc(db, "users", id))
  if (!user.exists()) throw new Error("User not found")
  const basket = user.data().basket as Basket[]
  return basket.find((basketItem) => basketItem.id == product.id)
}

export const removeProductFromBasket = async (
  productId: ProductId,
  id: UserId,
) => {
  const user = await getDoc(doc(db, "users", id))
  if (!user.exists()) throw new Error("User not found")
  const basket = user.data().basket as Basket[]
  const newBasket = basket.filter((basketItem) => basketItem.id !== productId)
  await setBasket(newBasket, id)
  return productId
}
