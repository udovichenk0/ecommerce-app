import { Link } from "react-router-dom"
import './styles.scss'
interface IProp {
	glasses: string
	title: string
	subtitle: string
	price: number
	isFetching: boolean
}

export const ShopCard = ({
	glasses, 
	title,
	subtitle, 
	price,
	isFetching}:IProp) => {
	return (
		<Link to={'/'}>
				<div className="border-2 border-[#e1e1e1] bg-white  h-[314px] card ">
				<div className="w-full h-auto bg-[#f1f1f1] flex items-center justify-center">
					{isFetching? <div></div> :
					<div className="w-full h-auto bg-[#f1f1f1] image transition-all duration-200 ease">
						<img src={glasses} className='w-full h-full' alt="" />
					</div>
					}
				</div>
				
				<div className="p-4 flex items-center flex-col">
					<h2 className="text-2xl font-medium">{title}</h2>
					<p className="text-[#818181]">{subtitle}</p>
					<p className="font-bold text-xl py-6">${price}</p>
				</div>
			</div>
		</Link>
	)
}