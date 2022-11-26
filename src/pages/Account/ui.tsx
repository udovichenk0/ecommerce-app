import { Profile, viewerModel } from '@/entities/viewer'
import { useAppSelector } from '@/shared/lib/redux-std'
import { Layout } from "@/shared/ui/layouts/layout"
import { Header } from "@/widgets/header"

export const AccountPage = () => {
	const profile = useAppSelector(viewerModel.selectors.profile)
	const isFetching = useAppSelector(viewerModel.selectors.isFetching)
	return (
		<Layout header={<Header/>}>
			<div className='container flex justify-center'>
				<Profile profile={profile} isFetching={isFetching}/>	
			</div>
		</Layout>
	)
}