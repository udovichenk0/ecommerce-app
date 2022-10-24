import { PropsWithChildren } from "react";
import { Header } from "../header";

export const Layout = ({children}: PropsWithChildren) => {
	return (
		<>
			<Header/>
			{children}
		</>
	)
}