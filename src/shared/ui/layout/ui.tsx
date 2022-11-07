import React,{PropsWithChildren } from "react";
import { Footer } from "../footer";
import { Header } from "../header";
export const Layout = ({children}: PropsWithChildren) => {
	return (
		<div className="grid h-screen grid-rows-[auto,1fr,auto] grid-cols-[100%]">
			<Header/>
				{children}
			<Footer/>
		</div>
	)
}