import { useNavigate } from "react-router-dom"

export const BackButton = () => {
	const navigate = useNavigate()

	return (
		<button
		className="font-bold text-lg"
		onClick={() => navigate(-1)}>
			Back
		</button>
	)
}