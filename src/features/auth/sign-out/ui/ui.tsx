import { useAction } from "@/shared/lib/redux-std"
import { GreyButton } from "@/shared/ui/buttons"

import { signOutFx } from "../model"

export const SignOut = () => {
	const signOut = useAction(signOutFx)
	return (
		<GreyButton label="Sign Out" action={() => signOut()}/>
	)
}