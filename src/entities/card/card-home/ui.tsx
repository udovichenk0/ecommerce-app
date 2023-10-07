import { Link } from "react-router-dom"

interface IProps {
	image: string
	name: string
	subtitle: string
	id: string
}
export const Card = ({image, name, subtitle, id}:IProps) => {
	return (
			<div className="border-2 border-[#e1e1e1] 2xl:max-w-[454px] xl:max-w-[362px] lg:max-w-[284px] md:max-w-[358px]">
				<Link to={`/product/${id}`}>
					<div className="w-full h-40 bg-[#f1f1f1] flex justify-center">
						<img src={image} className='h-full' alt={name} />
					</div>
					<div className="p-4">
						<h2 className="text-2xl font-medium">{name}</h2>
						<p className="text-[#818181]">{subtitle}</p>
					</div>
				</Link>
			</div>
	)
}