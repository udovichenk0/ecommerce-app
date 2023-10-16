import { useEffect, useState } from "react"
import { Controller } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { useNavigate } from "react-router-dom"

import "./style.css"
import "react-phone-input-2/lib/style.css"
// import { sessionModel } from "@/entities/session"

// eslint-disable-next-line import/no-internal-modules
import bgDefault from "@/shared/assets/accBgDefault.jpg"
// import { readFile } from "@/shared/lib/fileReader"
// import { useAction } from "@/shared/lib/redux-std"
import { Button } from "@/shared/ui/buttons/main"
import { FileChooser, InputEditor } from "@/shared/ui/inputs"
import { routes } from "@/shared/config/routes"

import { useGetForm } from "../config"
import { checkUpdate } from "../lib"
import { IData } from "../types"

export const ProfileEditForm = ({
  isFetching,
  profile,
}: {
  isFetching: boolean
  profile: any
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  // const editProfile = useAction(sessionModel.actions.startEditProfile)
  const { handleSubmit, register, control, errors } = useGetForm(profile)

  const handle = async (data: IData) => {
    if (checkUpdate(data, profile)) {
      // const avatar = await readFile(data.avatar[0])
      setLoading(true)
      // editProfile({
      // profile: {
      //   id: profile.uid,
      //   info: {
      //     ...data,
      //     avatar: avatar || profile.avatar,
      //     mobile: data?.mobile?.length > 5 ? data.mobile : null,
      //   },
      // },
      // })
    }
  }
  useEffect(() => {
    if (loading && !isFetching) {
      navigate("/account")
    }
  }, [handle])
  return (
    <form onSubmit={handleSubmit(handle)}>
      <div className="container flex justify-center">
        <div className="relative  mb-20 w-[700px] p-4">
          <div className="relative h-[150px] w-full bg-[#e9e9e9]">
            <div className="absolute left-0 top-0 h-full w-full overflow-hidden object-cover">
              <img className="h-full w-full" src={bgDefault} alt="banner" />
            </div>
            <div className="absolute -bottom-1/3 z-[9] flex w-full items-center justify-between px-5">
              <div className="relative flex h-[96px] w-[96px] items-center justify-center rounded-full bg-white">
                <img
                  className="h-[90px] w-[90px] rounded-full"
                  src={profile.avatar}
                  alt={profile.name}
                />
                <div className="absolute bottom-0 right-0 flex">
                  <FileChooser register={register} name="avatar" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 pt-20">
            <div className="mb-8 flex flex-col gap-y-5">
              <InputEditor
                label="* Full Name"
                register={register}
                name="name"
                errors={errors}
                disabled={isFetching}
              />
              <InputEditor
                label="* Email Address"
                register={register}
                disabled={true}
                name="email"
              />
              <InputEditor
                disabled={isFetching}
                placeholder={
                  "#245 Brgy. Maligalig, Arayat Pampanga, Philippines"
                }
                label="Address (Will be used for checkout)"
                register={register}
                name="address"
              />
              <Controller
                control={control}
                name={"mobile"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <PhoneInput
                      country={"ua"}
                      value={value}
                      onChange={onChange}
                    />
                  )
                }}
              />
            </div>
            <div className="flex justify-between">
              <Button as="link" to={routes.account} intent={'outline'}>
                Back to Profile
              </Button>
              <Button
                disabled={isFetching}
                size={"md"}
                onClick={handleSubmit(handle)}
              >
                {isFetching ? "Updating Profile.." : "Update Profile"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
