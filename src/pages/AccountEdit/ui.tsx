import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/viewer"
// eslint-disable-next-line import/no-internal-modules
import bgDefault from '@/shared/assets/accBgDefault.jpg'
import { useAppSelector } from "@/shared/lib/redux-std"
import { ProfileType } from "@/shared/lib/types"
import { useAuth } from "@/shared/lib/useAuth"
import { BaseButton } from "@/shared/ui/buttons"
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
		<div className="w-[700px] border-[1px] border-[#e1e1e1] p-4 relative mb-20">
			<div className='w-full h-[150px] relative bg-[#e9e9e9]'>
				<div className='overflow-hidden w-full h-full object-cover absolute top-0 left-0'>
					<img className='w-full h-full' src={bgDefault} alt="banner" />
				</div>
				<div className='z-50 pt-[310px] absolute -bottom-1/3 px-5 flex items-center justify-between w-full'>
						<div className='w-[96px] h-[96px] bg-white rounded-full flex justify-center items-center'>
							<img className='w-[90px] h-[90px] rounded-full' src={profile.avatar} alt={profile.name} />
						</div>
						<div>
							<BaseButton action={() => console.log(1)} label={'Edit Account'}/>
						</div>
				</div>
			</div>
			<div className='pt-20 grid gap-8'>
				<h2 className='text-2xl font-medium'>{profile.name}</h2>
				<div className='flex gap-3'>
					<span className='font-bold'>Email:</span>
					<h2>{profile.email}</h2>
				</div>
				<div className='flex gap-3'>
					<span className='font-bold'>Address:</span>
					<h2>{profile.address || 'Address\'s not set'}</h2>
				</div>
				<div className='flex gap-3'>
					<span className='font-bold'>Date Joined:</span>
					<h2>{profile.joinedData}</h2>
				</div>
			</div>
		</div>
		</div>
	</Layout>
	)
}