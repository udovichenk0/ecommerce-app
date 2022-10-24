import { Panel } from "@/shared/ui/panel/ui"

type propsType = {
	title: string
	glasses: any
}

export const Grid = ({data}:any) => {
	return (
		<div className="px-20">
			<Panel title={'Featured Products'} link={'/'}/>
		</div>
	)
}