import { Card } from "@/entities/card/card-home"
import { ProductType } from "@/shared/types/product.type"
import { Panel } from "@/shared/ui/panel/ui"

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
					data?.map(({name, image, subtitle}:any, id:number) => {
						return (
							<Card key={id} title={name} glasses={image} subtitle={subtitle}/>
						)
					})
				}
			</div>
			
		</div>
	)
}