import { Link } from "react-router-dom"
import "./styles.scss"
interface IProp {
  image: string
  name: string
  subtitle: string
  price: number
  isFetching: boolean
  id: string
}

export const ShopCard = ({ image, name, subtitle, price, id }: IProp) => {
  return (
    <div className="card flex h-[330px] w-[359px] justify-center border-2 border-[#e1e1e1] bg-white">
      <Link to={`/product/${id}`}>
        <div className="flex h-auto w-full items-center justify-center bg-[#f1f1f1]">
          <div className="image ease h-auto w-[80%] bg-[#f1f1f1] transition-all duration-200">
            <img src={image} className="h-full w-full" alt={name} />
          </div>
        </div>

        <div className="hov ease flex flex-col items-center pt-4 transition-all duration-200">
          <h2 className="text-2xl font-medium">{name}</h2>
          <p className="text-[#818181]">{subtitle}</p>
          <p className="py-6 text-xl font-bold">${price}</p>
        </div>
      </Link>
    </div>
  )
}
