import { viewerModel } from "@/entities/viewer"
import { useAction } from "@/shared/lib/redux-std"
import { GoogleBtn } from "@/shared/ui/buttons"

export const GoogleAuth = () => {
	const signinWithGoogle = useAction(viewerModel.actions.startSigninWithGoogle)
	return (
		<GoogleBtn action={() => signinWithGoogle()}/>
	)
}