import { useAction } from "@/shared/lib/redux-std"

// eslint-disable-next-line import/no-internal-modules
import { GitHubSvg } from "../assets/githubSvg"

import { signInWithGithubFx } from "./model"

export const GitHubAuth = () => {
  const startsignInWithGitHub = useAction(signInWithGithubFx)
  return (
    <button
      onClick={() => startsignInWithGitHub()}
      className="flex w-full items-center justify-between border-[1px] border-[#24292e] bg-[#24292e] p-4 font-bold text-white transition-all delay-75 hover:bg-[#30363d]"
    >
      <GitHubSvg />
      Continue with GitHub
    </button>
  )
}
