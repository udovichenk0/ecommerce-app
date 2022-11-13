import { viewerModel } from "@/entities/viewer"
import { useAction } from "@/shared/lib/redux-std"
import { GreyButton } from "@/shared/ui/buttons"

import { epics } from "../model"

export const SignOut = () => {
	const signOut = useAction(viewerModel.actions.startSignOut)
	return (
		<GreyButton label="Sign Out" action={() => signOut()}/>
	)
}