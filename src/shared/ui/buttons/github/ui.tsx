// eslint-disable-next-line import/no-internal-modules
import { GitHubSvg } from "@/shared/assets/githubSvg"

export const GitHubBtn = () => {
	return (
		<button className="hover:bg-[#30363d] transition-all delay-75 p-4 bg-[#24292e] border-[1px] border-[#24292e] font-bold text-white w-full flex items-center justify-between">
			<GitHubSvg/>
			Continue with GitHub
		</button>
	)
}