import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom"

import { AppRoutes } from "@/shared/config/route";

export const RenderRoutes = ({routes}:{routes: Record<AppRoutes, { path: string; element: ReactNode }>}) => {
	return (
		<Routes>
			{Object.values(routes).map(({path, element}) => {
				return (
					<Route key={path}
					path={path} 
					element={element}/>
				)
			})}
		</Routes>
	)
}