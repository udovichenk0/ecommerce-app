import { Link } from "react-router-dom"
import './styles.scss'
interface IProp {
	image: string
	name: string
	subtitle: string
	price: number
	isFetching: boolean
}

export const ShopCard = ({
	image, 
	name,
	subtitle, 
	price,}:IProp) => {
	return (
		<div className="flex justify-center border-2 border-[#e1e1e1] bg-white h-[330px] card max-w-[359px]">
			<Link to={'/'}>
						<div className="w-full h-auto bg-[#f1f1f1] flex items-center justify-center">
							<div className="w-[80%] h-auto bg-[#f1f1f1] image transition-all duration-200 ease">
								<img src={image} className='w-full h-full' alt={name} />
							</div>
						</div>
					
					<div className="pt-4 flex items-center flex-col hov transition-all duration-200 ease">
						<h2 className="text-2xl font-medium">{name}</h2>
						<p className="text-[#818181]">{subtitle}</p>
						<p className="font-bold text-xl py-6">${price}</p>
					</div>
			</Link>
		</div>
	)
}