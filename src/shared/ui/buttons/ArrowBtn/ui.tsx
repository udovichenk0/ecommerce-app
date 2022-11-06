import { useNavigate } from "react-router-dom"

export const ShopNow = ({title}:{title: string}) => {
	const navigate = useNavigate()
	return (
		<button onClick={() => navigate('/shop')}
		className="py-[12px] px-[17px] text-base bg-[#101010] border-2 border-[#101010] text-white font-bold">
			{title}
		</button>
	)
}