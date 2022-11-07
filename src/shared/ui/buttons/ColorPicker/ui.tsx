import React from "react"
export const ColorPicker = ({colors, onSelectColor}:any) => {
	return (
		colors?.map((color:any, ind:number) => {
			return (
				<button key={ind} style={{backgroundColor: color}} className={`w-[30px] h-[30px] rounded-full`}
				onClick={() => onSelectColor(color)}>
				</button>
			)
		})
	)
}