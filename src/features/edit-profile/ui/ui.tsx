import { useForm } from "react-hook-form"

import { viewerModel } from "@/entities/viewer"
// eslint-disable-next-line import/no-internal-modules
import bgDefault from '@/shared/assets/accBgDefault.jpg'
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { InputEditor } from "@/shared/ui/editor"
import { FileChooser } from "@/shared/ui/file-chooser"

export const ProfileEditForm = () => {
	const profile = useAppSelector(viewerModel.selectors.profile)
	const editProfile = useAction(viewerModel.actions.startEditProfile)
	const {register, handleSubmit} = useForm({
		defaultValues: {
			email: profile.email,
			name: profile.name,
			avatar: profile.avatar,
			address: profile.address,
		}
	})
	const convert = (file: File) => {
		const reader = new FileReader()
		reader.onloadend = () => {

		}
		reader.readAsDataURL(file)
	}
	const handle = (data:any) => {
		editProfile({id: profile.uid, data})
	}
	return (
		<form onSubmit={handleSubmit(handle)}>
			<div className='container flex justify-center'>
			<div className="w-[700px]  p-4 relative mb-20">
				<div className='w-full h-[150px] relative bg-[#e9e9e9]'>
					<div className='overflow-hidden w-full h-full object-cover absolute top-0 left-0'>
						<img className='w-full h-full' src={bgDefault} alt="banner" />
					</div>
					<div className='z-50 absolute -bottom-1/3 px-5 flex items-center justify-between w-full'>
							<div className='w-[96px] h-[96px] bg-white rounded-full flex justify-center items-center relative'>
								<img className='w-[90px] h-[90px] rounded-full' src={profile.avatar} alt={profile.name} />
								<div className="flex absolute right-0 bottom-0">
									{/* <FileChooser register={register} label='banner' name='avatar'/> */}
								</div>
							</div>
								{/* <FileChooser register={register} label='banner'/> */}
					</div>
				</div>
				<div className="pt-20 px-3 flex flex-col gap-y-5">
					<InputEditor label='* Full Name' register={register} name='name'/>
					<InputEditor label='* Email Address' register={register} disabled={true} name='email'/>
					<InputEditor placeholder={'#245 Brgy. Maligalig, Arayat Pampanga, Philippines'} label='Address (Will be used for checkout)' register={register} name='address'/>
				</div>

			</div>
		</div>
		<button onSubmit={handleSubmit(handle)}>
fsdfadf
		</button>
		</form>
	)
}