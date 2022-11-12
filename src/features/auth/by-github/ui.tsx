import { firebase } from "@/shared/api"
import { GitHubBtn } from "@/shared/ui/buttons"

import { signWithGithub } from "./model"

export const GitHubAuth = () => {
	return (
		<GitHubBtn action={() => console.log(1)}/>
	)
}