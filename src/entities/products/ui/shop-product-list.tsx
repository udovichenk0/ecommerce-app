import { Product } from "@/shared/api/product"

import { ShopCard } from "./shop-card"

export const ShopProductList = ({
  products,
  isPending,
}: {
  products: Product[] | undefined
  isPending: boolean
}) => {
  if (isPending) {
    return (
      <div className="grid w-full grid-cols-auto-fit items-center justify-center gap-5">
        {Array.from({ length: 4 }).map((_, id) => (
          <Skeleton key={id} />
        ))}
      </div>
    )
  }
  return (
    <div className="grid w-full grid-cols-auto-fit items-center justify-center gap-5">
      {products?.map(({ image, name, subtitle, price, id }) => {
        return (
          <ShopCard
            key={id}
            image={image}
            name={name}
            subtitle={subtitle}
            price={price}
            isFetching={isPending}
            id={id}
          />
        )
      })}
    </div>
  )
}

const Skeleton = () => {
  return (
    <div className="w-full max-w-[454px] animate-pulse border-2 border-[#e1e1e1] bg-white shadow sm:h-[300px] md:h-[340px] lg:h-[380px]">
      <div className="h-[60%] bg-[#f1f1f1]" />
      <div className="p-4">
        <div className="mb-2 h-8 w-44 rounded-[5px] bg-[#f1f1f1]" />
        <div className="roudned-[5px] mb-2 h-6 w-32 bg-[#f1f1f1]" />
        <div className="roudned-[5px] h-6 w-32 bg-[#f1f1f1]" />
      </div>
    </div>
  )
}
