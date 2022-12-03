import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/session"
// eslint-disable-next-line import/no-internal-modules
import { ProfileEditForm } from "@/features/edit-profile"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

export const AccountEditPage = () => {
	const navigate = useNavigate()
	const profile = useAppSelector(viewerModel.selectors.profile)
	const isFetching = useAppSelector(viewerModel.selectors.isFetching)
	useEffect(() => {
		if(!profile.name) navigate('/', {replace: true})
	}, [profile])
	return (
		<Layout header={<Header/>}>
				<div className='container flex justify-center'>
					<ProfileEditForm isFetching={isFetching}/>
				</div>
		</Layout>
	)
}