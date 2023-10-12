import { Header } from "@/widgets/header"

import { Profile, sessionModel } from "@/entities/session"

import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"

export const AccountPage = () => {
  const profile = useAppSelector(sessionModel.selectors.profile)
  const isFetching = useAppSelector(sessionModel.selectors.isFetching)
  return (
    <Layout header={<Header />}>
      <div className="container flex justify-center">
        <Profile profile={profile} isFetching={isFetching} />
      </div>
    </Layout>
  )
}
