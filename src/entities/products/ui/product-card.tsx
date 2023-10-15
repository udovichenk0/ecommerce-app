import { Link } from "react-router-dom"

import { routes } from "@/shared/config/routes"

interface ProductCardProps {
  image: string
  name: string
  subtitle: string
  id: string
}
export const ProductCard = ({
  image,
  name,
  subtitle,
  id,
}: ProductCardProps) => {
  return (
    <div className="h-[330px] w-full max-w-[454px] border-2 border-[#e1e1e1] bg-white">
      <Link to={routes.product(id)}>
        <div className="flex h-[60%] w-full justify-center bg-[#f1f1f1]">
          <img src={image} alt={name} />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p className="text-[#818181]">{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}
