import Select, { SingleValue } from 'react-select'
interface IProps {
	sizes: number[]
	// eslint-disable-next-line no-unused-vars
	setSelectedSize: (size: number) => void
}
export const Selector = ({sizes, setSelectedSize}: IProps) => {
	return (
		<Select options={sizes?.map((size:number) => ({value:size, label:`${size} mm`}))}
		onChange={
			(size:SingleValue<{
			value: any;
			label: string;
		}>) => setSelectedSize(size?.value)}
		/>
	)
}