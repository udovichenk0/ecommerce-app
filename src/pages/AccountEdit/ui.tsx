import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/viewer"
// eslint-disable-next-line import/no-internal-modules
import { ProfileEditForm } from "@/features/edit-profile"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useAuth } from "@/shared/lib/useAuth"
import { Layout } from "@/shared/ui/layout"
import { Header } from "@/widgets/header"

export const AccountEditPage = () => {
	const navigate = useNavigate()
	const profile = useAppSelector(viewerModel.selectors.profile)
	useEffect(() => {
		if(!useAuth(profile)) navigate('/')
	}, [profile])
	return (
		<Layout header={<Header/>}>
		<div className='container flex justify-center'>
			<ProfileEditForm/>
		</div>
	</Layout>
	)
}