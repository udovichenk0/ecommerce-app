import { Product } from "../types"

import { ProductCard } from "./product-card"

export const ProductList = ({
  products,
  isPending,
}: {
  products: Product[] | undefined
  isPending: boolean
}) => {
  if (isPending) {
    return (
      <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
        {Array.from({ length: 3 }).map((_, id) => (
          <Skeleton key={id} />
        ))}
      </div>
    )
  }
  return (
    <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
      {products?.map(({ name, image, subtitle, id }) => {
        return (
          <ProductCard
            key={id}
            name={name}
            image={image}
            id={id}
            subtitle={subtitle}
          />
        )
      })}
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className="h-[330px] w-full max-w-[454px] animate-pulse border-2 border-[#e1e1e1] bg-white shadow">
      <div className="h-[60%] w-full bg-[#f1f1f1]" />
      <div className="p-4">
        <div className="mb-2 h-8 w-44 rounded-[5px] bg-[#f1f1f1]" />
        <div className="roudned-[5px] h-6 w-32 bg-[#f1f1f1]" />
      </div>
    </div>
  )
}
