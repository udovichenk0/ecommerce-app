import { ProductId } from "@/shared/api/product"

export type Product = {
  description: string
  image: string
  isFeatured: boolean
  isRecommended: boolean
  name: string
  sizes: number[]
  subtitle: string
  id: ProductId
  colors: string[]
  imageCollection: string[]
  price: number
}
