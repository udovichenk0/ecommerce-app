import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import { signOutFx } from "@/features/auth/sign-out"

// eslint-disable-next-line import/no-internal-modules
import defaultUser from "@/shared/assets/defaultUser.png"
import { sliceName } from "@/shared/lib/slice-name"
import { useClickOutside } from "@/shared/lib/use-click-outside"
import { ProfileDropDown } from "@/shared/ui/profile-drop-down"
import { useAction } from "@/shared/lib/redux-std"

export const Profile = ({
  name,
  photo,
}: {
  name: string
  photo: string | null
}) => {
  const signOut = useAction(signOutFx)
  const [isOpened, setOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const reference = useRef(null)
  useClickOutside(() => setOpen(false), reference, isOpened)
  return (
    <div className="menu relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        ref={reference}
        className="flex items-center gap-3"
      >
        <h2>{sliceName(name)}</h2>
        <div className="h-[40px] w-[40px] rounded-full">
          <img
            className="h-full w-full rounded-full"
            src={photo || defaultUser}
            alt={name}
          />
        </div>
      </button>
      {isOpened && (
        <ProfileDropDown reference={reference}>
          <GreyButton
            title="View Account"
            onClick={() => navigate("/account")}
          />
          <GreyButton 
            title="Sign Out" 
            onClick={() => signOut()} />
        </ProfileDropDown>
      )}
    </div>
  )
}

const GreyButton = ({title, onClick}:{title: string, onClick: () => void}) => {
  return (
    <button 
      className="w-full py-2 px-4 text-sm font-bold text-tr-dark" 
      onClick={onClick}>
      {title}
    </button>
  )
}