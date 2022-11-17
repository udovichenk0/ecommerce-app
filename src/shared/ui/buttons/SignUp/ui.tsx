import { useNavigate } from "react-router-dom"

export const SingUp = () => {
	const navigate = useNavigate()
	return (
		<button onClick={() => navigate('/signup')}className="py-[8px] px-[13px] text-sm bg-main-dark border-2 border-main-dark mr-5 text-white font-medium">
			Sign Up
		</button>
	)
}