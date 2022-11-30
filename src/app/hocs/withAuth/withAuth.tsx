import { useNavigate, Navigate } from "react-router-dom"

import { viewerModel } from "@/entities/viewer"
import { useAppSelector } from "@/shared/lib/redux-std"

export const WithAuth = ({children}:any) =>{
	const profile = useAppSelector(viewerModel.selectors.profile)
	const navigate = useNavigate()
		if(profile.name){
			return children
		}
		return <Navigate to={'/'}/>
}