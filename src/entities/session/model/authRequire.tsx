import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const AuthRequire = ({children, profile}:any) => {
	const navigate = useNavigate()
	if(profile.name) return children
	useEffect(() => {
		return navigate('/', {replace: true})
	}, [profile])
}
