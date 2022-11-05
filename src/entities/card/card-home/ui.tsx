import { Link } from "react-router-dom"

export const Card = ({glasses, title, subtitle}:any) => {
	return (
			<div className="self-center border-2 border-[#e1e1e1] 2xl:max-w-[424px] xl:max-w-[342px] lg:max-w-[284px] md:max-w-[314px]">
				<Link to={'/'}>
					<div className="w-full h-40 bg-[#f1f1f1] flex justify-center">
						<img src={glasses} className='h-full' alt={title} />
					</div>
					<div className="p-4">
						<h2 className="text-2xl font-medium">{title}</h2>
						<p className="text-[#818181]">{subtitle}</p>
					</div>
				</Link>
			</div>
	)
}