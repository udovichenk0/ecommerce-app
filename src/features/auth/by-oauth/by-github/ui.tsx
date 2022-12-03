import { viewerModel } from "@/entities/session"
import { useAction } from "@/shared/lib/redux-std"

// eslint-disable-next-line import/no-internal-modules
import { GitHubSvg } from "../assets/githubSvg"


export const GitHubAuth = () => {
	const startsignInWithGitHub = useAction(viewerModel.actions.startsignInWithGitHub)
	return (
		<button 
		onClick={startsignInWithGitHub}
		className="hover:bg-[#30363d] transition-all delay-75 p-4 bg-[#24292e] border-[1px] border-[#24292e] font-bold text-white w-full flex items-center justify-between">
			<GitHubSvg/>
			Continue with GitHub
		</button>
	)
}