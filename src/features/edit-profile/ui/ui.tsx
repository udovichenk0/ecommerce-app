import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { useNavigate } from "react-router-dom"

import './style.css'
import 'react-phone-input-2/lib/style.css'
import { notifyModel } from "@/entities/notification"
import { viewerModel } from "@/entities/session"
// eslint-disable-next-line import/no-internal-modules
import bgDefault from '@/shared/assets/accBgDefault.jpg'
import { readFile } from "@/shared/lib/fileReader"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { BaseButton } from "@/shared/ui/buttons"
import { InputEditor } from "@/shared/ui/editor"
import { FileChooser } from "@/shared/ui/inputs"

import { checkUpdate } from "../lib"
import { IData } from "../types"

export const ProfileEditForm = ({isFetching}:{isFetching:boolean}) => {
	const profile = useAppSelector(viewerModel.selectors.profile)
	const [loading, setLoading] = useState<boolean>(false)
	const navigate = useNavigate()
	const notification = useAction(notifyModel.actions.enqueueSnackbar)
	const editProfile = useAction(viewerModel.actions.startEditProfile)
	const {register, handleSubmit, control} = useForm({
		defaultValues: {
			email: profile.email,
			name: profile.name,
			avatar: profile.avatar,
			address: profile.address,
			mobile: profile.mobile
		}
	})
	const handle = async (data:IData) => {
			if(checkUpdate(data, profile)){
				setLoading(true)
				const avatar = await readFile(data.avatar[0])
				editProfile({
					id: profile.uid,
					info: {
						...data, 
						avatar: avatar || profile.avatar, 
						mobile: data.mobile.length > 5? data.mobile : null
					},
				})
			}
	}
	useEffect(() => {
		if(loading && !isFetching){
			navigate('/account')
			notification({message: 'Profile Updated!', type: 'success'})
		}
	}, [handle])
	return (
		<form onSubmit={handleSubmit(handle)}>
			<div className='container flex justify-center'>
			<div className="w-[700px]  p-4 relative mb-20">
				<div className='w-full h-[150px] relative bg-[#e9e9e9]'>
					<div className='overflow-hidden w-full h-full object-cover absolute top-0 left-0'>
						<img className='w-full h-full' src={bgDefault} alt="banner" />
					</div>
					<div className='z-[9] absolute -bottom-1/3 px-5 flex items-center justify-between w-full'>
							<div className='w-[96px] h-[96px] bg-white rounded-full flex justify-center items-center relative'>
								<img className='w-[90px] h-[90px] rounded-full' src={profile.avatar} alt={profile.name} />
								<div className="flex absolute right-0 bottom-0">
									<FileChooser register={register} name='avatar'/>
								</div>
							</div>
								{/* <FileChooser register={register}/> */}
					</div>
				</div>
				<div className="px-3 pt-20">
					<div className="flex flex-col gap-y-5 mb-8">
						<InputEditor label='* Full Name' register={register} name='name' disabled={isFetching}/>
						<InputEditor label='* Email Address' register={register} disabled={true} name='email'/>
						<InputEditor disabled={isFetching} placeholder={'#245 Brgy. Maligalig, Arayat Pampanga, Philippines'} label='Address (Will be used for checkout)' register={register} name='address'/>
						<Controller
						control={control}
						name={'mobile'}
						render={({field: { onChange, value }}) => {
							return <PhoneInput
						country={'ua'}
						value={value}
						onChange={onChange}
						/>
						}}
						/>
						
						
					</div>
					<div className="flex justify-between">
						<button
						onClick={() => navigate('/account')}
						className="font-bold text-[#7d7d7d] bg-[#f2f2f2] border-[1px] border-[#e1e1e1] py-[15px] px-[20px]">Back to Profile</button>
						{<BaseButton disabled={isFetching} 
						label={isFetching? 'Updating Profile..' : 'Update Profile'} 
						action={handleSubmit(handle)}/>}
					</div>
				</div>
			</div>
			
		</div>
		</form>
	)
}