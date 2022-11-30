import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Profile, viewerModel } from '@/entities/viewer'
// import { RequireAuth } from '@/proccesses/requireAuth'
import { useAppSelector } from '@/shared/lib/redux-std'
import { AuthRequire, Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

export const AccountPage = () => {
	const navigate = useNavigate()
	const profile = useAppSelector(viewerModel.selectors.profile)
	const isFetching = useAppSelector(viewerModel.selectors.isFetching)
	useEffect(() => {
		if(!profile.name) navigate('/', {replace: true})
	}, [profile])
	return (
		<Layout header={<Header/>}>
				<div className='container flex justify-center'>
					<Profile profile={profile} isFetching={isFetching}/>	
				</div>
		</Layout>
	)
}