import React,{PropsWithChildren } from "react";

import { Footer } from "../footer";
export const Layout = ({children, header}: any) => {
	return (
		<div className="grid h-screen grid-rows-[auto,1fr,auto] grid-cols-[100%]">
			{header}
				{children}
			<Footer/>
		</div>
	)
}