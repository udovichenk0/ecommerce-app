import { Header } from "@/widgets/header"

import { ProfileEditForm } from "@/features/edit-profile"

import { sessionModel } from "@/entities/session"

// eslint-disable-next-line import/no-internal-modules
import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"

export const AccountEditPage = () => {
  const isFetching = useAppSelector(sessionModel.selectors.isFetching)
  const profile = useAppSelector(sessionModel.selectors.profile)
  return (
    <Layout header={<Header />}>
      <div className="container flex justify-center">
        <ProfileEditForm isFetching={isFetching} profile={profile} />
      </div>
    </Layout>
  )
}
