import { useNavigate } from "react-router-dom"

export const BackButton = () => {
	const navigate = useNavigate()

	return (
		<button
		className="font-bold text-lg bg-main-dark text-white py-3 px-8"
		onClick={() => navigate(-1)}>
			Back
		</button>
	)
}