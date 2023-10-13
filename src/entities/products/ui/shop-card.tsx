import { Link } from "react-router-dom"
interface ShopCardProps {
  image: string
  name: string
  subtitle: string
  price: number
  isFetching: boolean
  id: string
}

export const ShopCard = ({
  image,
  name,
  subtitle,
  price,
  id,
}: ShopCardProps) => {
  return (
    <div className="group w-full max-w-[454px] border-2 border-[#e1e1e1] bg-white sm:h-[300px] md:h-[340px] lg:h-[380px]">
      <Link to={`/product/${id}`}>
        <div className="flex justify-center bg-[#f1f1f1] ">
          <img
            src={image}
            className="ease h-auto w-[80%] transition-all duration-200 group-hover:w-[60%]"
            alt={name}
          />
        </div>
        <div className="ease flex flex-col items-center p-4 transition-all duration-200">
          <div className="text-2xl font-medium">{name}</div>
          <div className="text-[#818181]">{subtitle}</div>
          <div className="py-6 text-xl font-bold">${price}</div>
        </div>
      </Link>
    </div>
  )
}
