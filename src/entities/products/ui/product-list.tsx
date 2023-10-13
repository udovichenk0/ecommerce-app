import { Product } from "../types"

import { ProductCard } from "./product-card"

export const ProductList = ({
  products, 
  isPending
}: { 
  products: Product[] | undefined,
  isPending: boolean
}) => {
  if(isPending) {
    return (
      <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
        {Array.from({length:3}).map((_, id) => <Skeleton key={id}/>)}
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
    <div className="shadow animate-pulse border-2 h-[330px] w-full border-[#e1e1e1] max-w-[454px] bg-white">
      <div className="bg-[#f1f1f1] h-[60%] w-full"/>
      <div className="p-4">
        <div className="h-8 w-44 mb-2 bg-[#f1f1f1] rounded-[5px]"/>
        <div className="h-6 w-32 bg-[#f1f1f1] roudned-[5px]"/>
      </div>
    </div>
  )
}