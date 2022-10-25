import { GoogleSvg } from "@/shared/assets/googleSvg"

export const GoogleBtn = () => {
	return (
		<button className="hover:bg-[#f2f3f4] transition-all delay-75 p-4 bg-white border-[1px] border-[#c5c5c5] font-bold text-[#3a3a3a] w-full flex items-center justify-between">
			<GoogleSvg/>
			Continue with Google
		</button>
	)
}