import { viewerModel } from "@/entities/session"
import { useAction } from "@/shared/lib/redux-std"
import { GreyButton } from "@/shared/ui/buttons"

export const SignOut = () => {
	const signOut = useAction(viewerModel.actions.startSignOut)
	return (
		<GreyButton label="Sign Out" action={() => signOut()}/>
	)
}