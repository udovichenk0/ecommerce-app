import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/session"
// eslint-disable-next-line import/no-internal-modules
import { ProfileEditForm } from "@/features/edit-profile"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

export const AccountEditPage = () => {
	const isFetching = useAppSelector(viewerModel.selectors.isFetching)
	const profile = useAppSelector(viewerModel.selectors.profile)
	return (
		<Layout header={<Header/>}>
				<div className='container flex justify-center'>
					<ProfileEditForm isFetching={isFetching} profile={profile}/>
				</div>
		</Layout>
	)
}