import { viewerModel } from "@/entities/session"
import { useAction } from "@/shared/lib/redux-std"

// eslint-disable-next-line import/no-internal-modules
import { GoogleSvg } from "../assets/googleSvg"

export const GoogleAuth = () => {
	const signinWithGoogle = useAction(viewerModel.actions.startSigninWithGoogle)
	return (
		<button 
		onClick={() => signinWithGoogle()}
		className="hover:bg-[#f2f3f4] transition-all delay-75 p-4 bg-white border-[1px] border-[#c5c5c5] font-bold text-[#3a3a3a] w-full flex items-center justify-between">
			<GoogleSvg/>
			Continue with Google
		</button>
	)
}