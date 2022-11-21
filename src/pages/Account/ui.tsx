import { Profile, viewerModel } from '@/entities/viewer'
import { useAppSelector } from '@/shared/lib/redux-std'
import { Layout } from "@/shared/ui/layout"
import { Header } from "@/widgets/header"

export const AccountPage = () => {
	const profile = useAppSelector(viewerModel.selectors.profile)
	return (
		<Layout header={<Header/>}>
			<div className='container flex justify-center'>
				<Profile profile={profile}/>	
			</div>
		</Layout>
	)
}