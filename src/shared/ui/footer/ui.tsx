// eslint-disable-next-line import/no-internal-modules
import logo from "@/shared/assets/logo.png"

import { links } from "./config"

// searchModel
export const Footer = () => {
  return (
    <div className="h-24 w-full bg-[#f0f0f0]">
      <div className="container flex h-full w-full items-center justify-between text-light-dark">
        <p className="text-light-dark">
          Developed by <a href={links.github}>kkkkhe</a>
        </p>
        <div className="flex items-center gap-3">
          <div className="h-auto w-28">
            <img className="h-auto w-full" src={logo} alt="" />
          </div>
          <p>© 2022</p>
        </div>
        <p className="text-light-dark">
          See this project{" "}
          <a href={links.project} className="underline">
            HERE
          </a>
        </p>
      </div>
    </div>
  )
}
