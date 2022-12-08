import { ReactNode } from "react"

interface IProps {
	children: ReactNode
	image: string
}
export const HeroLayout = ({children, image}: IProps) => {
	return (
		<div>
			<section className=" bg-[#f3f3f3] flex items-center h-[400px] justify-between">
				<div className="p-8 md:basis-1/2">
					{children}
				</div>
				<div className="h-full w-full bg-cover basis-1/2 hidden md:block">
					<img src={image} className='h-full bg-contain w-full object-cover' alt="" />
				</div>
			</section>
		</div>
	)
}