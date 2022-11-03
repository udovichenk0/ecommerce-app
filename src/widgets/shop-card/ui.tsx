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
	price,
	isFetching}:IProp) => {
		console.log(isFetching)
	return (
		<Link to={'/'}>
			<div className="border-2 border-[#e1e1e1] bg-white  min-h-[314px] card ">
				<div className="h-[148px]">

					<div className="w-full h-auto bg-[#f1f1f1] flex items-center justify-center">
						<div className="w-full h-auto bg-[#f1f1f1] image transition-all duration-200 ease">
							<img src={image} className='w-full h-full' alt={name} />
						</div>
					</div>
				</div>
				
				<div className="p-4 flex items-center flex-col hov transition-all duration-200 ease">
					<h2 className="text-2xl font-medium">{name}</h2>
					<p className="text-[#818181]">{subtitle}</p>
					<p className="font-bold text-xl py-6">${price}</p>
				</div>
			</div>
		</Link>
	)
}