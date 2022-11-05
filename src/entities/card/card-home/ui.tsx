import { Link } from "react-router-dom"

export const Card = ({glasses, title, subtitle}:any) => {
	return (
		<Link to={'/'}>
			<div className="border-2 border-[#e1e1e1]">
				<div className="w-full h-46 bg-[#f1f1f1]">
					<img src={glasses} className='h-full' alt={title} />
				</div>
				<div className="p-4">
					<h2 className="text-2xl font-medium">{title}</h2>
					<p className="text-[#818181]">{subtitle}</p>
				</div>
			</div>
		</Link>
	)
}