import { Footer } from "../../footer";

type PropsType = {
	children: JSX.Element|JSX.Element[]
	header: JSX.Element
}
export const Layout = ({children, header}: PropsType) => {
	return (
		<div className="grid h-screen grid-rows-[auto,1fr,auto] grid-cols-[100%]">
			{header}
				{children}
			<Footer/>
		</div>
	)
}