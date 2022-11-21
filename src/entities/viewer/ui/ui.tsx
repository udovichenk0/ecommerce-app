// eslint-disable-next-line import/no-internal-modules
import bgDefault from '@/shared/assets/accBgDefault.jpg'
import { ProfileType } from '@/shared/lib/types'
import { BaseButton } from '@/shared/ui/buttons'

export const Profile = ({profile}: {profile: ProfileType}) => {
	return (
		<div className="w-[700px] border-[1px] border-[#e1e1e1] p-4 relative">
			<div className='w-full h-[150px] relative bg-[#e9e9e9]'>
				<div className='overflow-hidden w-full h-full object-cover absolute top-0 left-0'>
					<img className='w-full h-full' src={bgDefault} alt="" />
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
				<h2>{profile.name}</h2>
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
	)
}