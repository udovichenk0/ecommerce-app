import bgDefault from "@/shared/assets/accBgDefault.jpg"
import defaultUser from "@/shared/assets/defaultUser.png"
import { Button } from "@/shared/ui/buttons/main"
import { routes } from "@/shared/config/routes"

import { User } from "./types"

export const Profile = ({
  profile,
}: {
  profile: User
  isFetching: boolean
}) => {
  return (
    <div className="relative mb-20 w-[700px] border-[1px] border-[#e1e1e1] p-4">
      <div className="relative h-[150px] w-full bg-[#e9e9e9]">
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center overflow-hidden object-cover">
          <img className="h-full w-full" src={bgDefault} alt="banner" />
        </div>
        <div className="absolute -bottom-1/3 z-[9] flex w-full items-center justify-between px-5">
          <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white">
            <img
              className="h-[90px] w-[90px] rounded-full"
              src={profile.avatar || defaultUser}
              alt={profile.name}
            />
          </div>
          <Button as="link" size="md" to={routes.edit}>
            Edit Account
          </Button>
        </div>
      </div>
      <div className="grid gap-8 pt-20">
        <h2 className="text-2xl font-medium">{profile.name}</h2>
        <div className="flex gap-3">
          <span className="font-bold">Email:</span>
          <h2>{profile.email}</h2>
        </div>
        <div className="flex gap-3 ">
          <span className="font-bold">Address:</span>
          <h2>{profile.address || "Address's not set"}</h2>
        </div>
        <div className="flex gap-3">
          <span className="font-bold">Date Joined:</span>
          <h2>{profile.joinedData || "Data's not available"}</h2>
        </div>
        <div className="flex gap-3">
          <span className="font-bold">Mobile:</span>
          <h2>{profile.mobile || "Mobile's not set"}</h2>
        </div>
      </div>
    </div>
  )
}
