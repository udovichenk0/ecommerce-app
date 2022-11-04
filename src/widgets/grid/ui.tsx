import { Card } from "@/entities/card/card-home"
import { Panel } from "@/shared/ui/panel/ui"

type propsType = {
	name: string
	image: string
	subtitle: string
}

export const Grid = ({data, title, link}:any) => {
	return (
		<div className="px-20 mt-28">
			<Panel title={title} link={link}/>
			<div className="grid grid-cols-auto-fit w-full justify-center gap-5">
				{
					data?.map(({name, image, subtitle}:propsType, id:number) => {
						return (
							<Card key={id} title={name} glasses={image} subtitle={subtitle}/>
						)
					})
				}
			</div>
			
		</div>
	)
}