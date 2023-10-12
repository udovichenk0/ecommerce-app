import { useAction } from "@/shared/lib/redux-std"

// eslint-disable-next-line import/no-internal-modules
import { GoogleSvg } from "../assets/googleSvg"

import { signWithGoogleFx } from "./model"

export const GoogleAuth = () => {
  const signinWithGoogle = useAction(signWithGoogleFx)
  return (
    <button
      onClick={signinWithGoogle}
      className="flex w-full items-center justify-between border-[1px] border-[#c5c5c5] bg-white p-4 font-bold text-[#3a3a3a] transition-all delay-75 hover:bg-[#f2f3f4]"
    >
      <GoogleSvg />
      Continue with Google
    </button>
  )
}
