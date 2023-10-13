import { Product } from "@/shared/api/product"

import { ShopCard } from "./shop-card"

export const ShopProductList = ({
  products,
  isPending
}: {
  products: Product[] | undefined,
  isPending: boolean
}) => {
  if(isPending){
    return (
      <div className="grid w-full grid-cols-auto-fit items-center justify-center gap-5">
        {Array.from({length: 4}).map((_, id) => <Skeleton key={id}/>)}
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
    <div className="sm:h-[300px] md:h-[340px] lg:h-[380px] shadow animate-pulse border-2 w-full border-[#e1e1e1] max-w-[454px] bg-white">
      <div className="bg-[#f1f1f1] h-[60%]"/>
      <div className="p-4">
        <div className="h-8 w-44 mb-2 bg-[#f1f1f1] rounded-[5px]"/>
        <div className="h-6 w-32 mb-2 bg-[#f1f1f1] roudned-[5px]"/>
        <div className="h-6 w-32 bg-[#f1f1f1] roudned-[5px]"/>
      </div>
    </div>
  )
}