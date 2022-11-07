import { Card } from "@/entities/card/card-home"
// eslint-disable-next-line import/no-internal-modules
import { ProductType } from "@/shared/types"
import { Panel } from "@/shared/ui/panel"

type propsType = {
	title: string
	link: string
	data: ProductType[]
}

export const Grid = ({data, title, link}:propsType) => {
	return (
		<div className="px-10 mt-28">
			<Panel title={title} link={link}/>
			<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
				{
					data?.map(({name, image, subtitle, id}:any, ind: number) => {
						return (
							<Card key={ind} title={name} glasses={image} id={id} subtitle={subtitle}/>
						)
					})
				}
			</div>
			
		</div>
	)
}