import { useNavigate } from "react-router-dom"

export const SignIn = () => {
	const navigate = useNavigate()
	return (
		<button onClick={() => navigate('/signin')} className="py-[8px] px-[13px] text-sm bg-lgrey text-[#7d7d7d] border-2 border-[#e1e1e1] font-medium">
			Sign In
		</button>
	)
}