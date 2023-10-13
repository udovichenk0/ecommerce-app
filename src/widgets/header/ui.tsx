import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { SearchProduct } from "@/features/search"

import { basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

// eslint-disable-next-line import/no-internal-modules
import logo from "@/shared/assets/logo.png"
import { useAppSelector } from "@/shared/lib/redux-std"
import { BurgerButton } from "@/shared/ui/buttons"
import { Button } from "@/shared/ui/buttons/main"

import { BasketSideMenu } from "./ui/basket"
import { links } from "./config"
import { Profile } from "./ui/profile"
import { ShopBag } from "./ui/shop-bag"

export const Header = () => {
  const [isOpened, setOpen] = useState<boolean>(false)
  const [isNavOpened, setNavOpen] = useState<boolean>(false)
  const basket = useAppSelector(basketModel.selectors.basket)
  const profile = useAppSelector(sessionModel.selectors.profile)
  const navigate = useNavigate()
  return (
    <div className="container pb-20 pt-8">
      <div className="mb-5 flex items-center justify-between sm:mb-0">
        <div className="flex items-center xl:static ">
          <div className="bloc mr-5 flex xl:hidden">
            <BurgerButton
              onHandle={() => setNavOpen((prev) => !prev)}
              isNavOpened={isNavOpened}
            />
          </div>

          <div className="hidden h-[65px] w-[179px] xl:block">
            <Link to={"/"}>
              <img src={logo} alt="Logo" className="h-full w-full" />
            </Link>
          </div>

          <nav
            className={`fixed top-0 z-[10] justify-center xl:static ${
              isNavOpened ? "left-0" : "-left-full"
            } w-full transition-all duration-300 xl:h-fit xl:w-auto `}
          >
            <ul className="flex h-screen flex-col items-center justify-center gap-y-5 text-[30px] font-medium text-[#101010ba] xl:h-fit xl:flex-row xl:text-[18px]">
              {links.map(({ link, title }) => {
                return (
                  <li key={title} className="px-4 py-[10px]">
                    <Link to={link}>{title}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
        <div className="flex items-center">
          <div className="mr-7 hidden w-[300px] sm:block">
            <SearchProduct />
          </div>
          <ShopBag setOpen={setOpen} basketLength={basket?.length} />
          {profile.name ? (
            <Profile name={profile.name} photo={profile.avatar} />
          ) : (
            <div className="flex gap-5">
              <Button onClick={() => navigate("/auth/signup")}>Sign In</Button>
              <Button
                intent={"outline"}
                onClick={() => navigate("/auth/signin")}
              >
                Sign In
              </Button>
            </div>
          )}
          <BasketSideMenu isOpened={isOpened} setOpen={setOpen} />
        </div>
      </div>
      <div className="w-full sm:hidden">
        <SearchProduct />
      </div>
    </div>
  )
}
