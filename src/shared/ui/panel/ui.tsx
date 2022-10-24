import { Link } from "react-router-dom"

export const Panel = ({title, link}: {title: string, link: string}) => {
return (
	<div className="flex justify-between items-center">
		<div className="text-main-dark text-[32px] font-medium">
			{title}
		</div>
		<Link to={link}>
			<div className="text-tr-dark underline text-xl font-bold">See all</div>	
		</Link>
	</div>
)
}