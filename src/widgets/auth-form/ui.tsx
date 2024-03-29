import { ReactNode } from "react"

import { signInWithGithubFx, signWithGoogleFx } from "@/features/auth/by-oauth"

import { Button } from "@/shared/ui/buttons/main"
import { useAction } from "@/shared/lib/redux-std"

import { GitHubSvg } from "./assets/github.svg"
import { GoogleSvg } from "./assets/google.svg"
type AuthFormProps = {
  children: ReactNode
  title: string
  button: ReactNode
  text: string
}
export const AuthForm = ({ children, title, button, text }: AuthFormProps) => {
  const authWithGithub = useAction(signInWithGithubFx)
  const authWithGoogle = useAction(signWithGoogleFx)
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-auto w-[800px] border-2 border-[#c5c5c5]">
        <div className="p-8 text-xl font-bold text-main-dark">{title}</div>
        <div className="items-center justify-center px-8 pb-8 md:flex">
          {children}
          <div className=" relative mx-14 flex justify-center">
            <span
              className="hidden before:absolute before:left-1/2 before:top-10 before:h-24 before:w-[1px] before:bg-[#e1e1e1] before:content-[''] after:absolute
					after:bottom-10 after:left-1/2 after:h-24 after:w-[1px] after:bg-[#e1e1e1] after:content-[''] md:block
					"
            ></span>
            <span className="text-sm font-bold text-[#1a1a1a]">OR</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 max-[550px]:grid-cols-1 md:mt-0 md:flex md:w-[60%]  md:flex-col">
            <Button
              className="flex items-center justify-between"
              size={"md"}
              onClick={authWithGithub}
            >
              <GitHubSvg />
              Continue with GitHub
            </Button>
            <Button
              intent={"outline"}
              className="flex items-center justify-between"
              size={"md"}
              onClick={authWithGoogle}
            >
              <GoogleSvg />
              Continue with Google
            </Button>
          </div>
        </div>
        <div className=" flex h-16 w-full items-center justify-center gap-7 border-t-2 border-[#c5c5c5] bg-lgrey">
          <p className="font-medium">{text}</p>
          {button}
        </div>
      </div>
    </div>
  )
}
