import { viewerModel } from "@/entities/viewer"
import { firebase } from "@/shared/api"
import { useAction } from "@/shared/lib/redux-std"
import { GitHubBtn } from "@/shared/ui/buttons"


export const GitHubAuth = () => {
	const startsignInWithGitHub = useAction(viewerModel.actions.startsignInWithGitHub)
	return (
		<GitHubBtn action={() => startsignInWithGitHub()}/>
	)
}