import { PropsWithChildren } from "react";
import { Footer } from "../footer";
import { Header } from "../header";

export const Layout = ({children}: PropsWithChildren) => {
	return (
		<div className="grid h-screen grid-row-auto-row">
			<Header/>
			{children}
			<Footer/>
		</div>
	)
}