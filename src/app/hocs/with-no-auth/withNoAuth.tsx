import { Navigate } from "react-router-dom"

import { viewerModel } from "@/entities/session"
import { useAppSelector } from "@/shared/lib/redux-std"

export const WithNoAuth = ({children}:any) =>{
	const profile = useAppSelector(viewerModel.selectors.profile)
		if(!profile.name){
			return children
		}
		return <Navigate to={'/'}/>
}