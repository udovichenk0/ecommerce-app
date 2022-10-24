import { Card } from "@/entities/card"
import { Panel } from "@/shared/ui/panel/ui"

type propsType = {
	title: string
	glasses: any
	subtitle: string
}

export const Grid = ({data, title, link}:any) => {
	return (
		<div className="px-20 mt-28">
			<Panel title={title} link={link}/>
			<div className="grid grid-cols-auto-fit w-full justify-center gap-5">
				{
					data?.map(({title, glasses, subtitle}:propsType, id:number) => {
						return (
							<Card key={id} title={title} glasses={glasses} subtitle={subtitle}/>
						)
					})
				}
			</div>
			
		</div>
	)
}