import { PropsWithChildren, ReactNode, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/viewer"
import { useAppSelector } from "@/shared/lib/redux-std"

export const RequireAuth = ({children}:any) =>{
	const profile = useAppSelector(viewerModel.selectors.profile)
	const navigate = useNavigate()
	if(profile.name){
		return children
	}
	else { 
		useEffect(() => {
			navigate('/', {replace: true})
		}, [])
	}
	
}