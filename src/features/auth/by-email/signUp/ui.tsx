import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { viewerModel } from "@/entities/viewer"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { BaseButton, ShopNow } from "@/shared/ui/buttons"
import { TextInput } from "@/shared/ui/textInput"

export const AuthSignUpForm = () => {
	const startAuth = useAction(viewerModel.actions.startAuth)
	const profile = useAppSelector(viewerModel.selectors.profile)
	const {handleSubmit, control, formState:{errors}} = useForm({
		mode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
			fullName: ''
		}
	})
	const onSubmit = (data:any) => {
		startAuth(data)
	}
	console.log(profile )
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full gap-1'>
			<Controller
			name='fullName'
			control={control}
			rules={{
				required: "Full name is required",
			}}
			render={({ field: { onChange, value, ref, onBlur}}) => {
				return <TextInput 
				inputRef={ref}
				value={value} 
				onChange={onChange}
				label={'Full name'}
				placeholder={'John Doe'}
				error={errors?.fullName}
				onBlur={onBlur}
				name={'fullName'}
				/>
			}}
			/>
			<Controller
			name='email'
			control={control}
			rules={{
				required: "Email is required",
				pattern: {
					value: /^\S+@\S+$/i,
					message: "Invalid email address",
				},
			}}
			render={({ field: { onChange, value, ref, onBlur}}) => {
				return <TextInput 
				inputRef={ref}
				value={value} 
				onChange={onChange}
				label={'Email'}
				placeholder={'test@example.com'}
				error={errors?.email}
				onBlur={onBlur}
				name={'email'}
				/>
			}}
			/>
			<Controller
			name='password'
			control={control}
			rules={{
				required: "Password is required",
			}}
			render={({ field: { onChange, value, ref, onBlur}}) => {
				return <TextInput 
				inputRef={ref}
				value={value} 
				onChange={onChange}
				label={'Password'}
				placeholder={'Your password'}
				error={errors?.password}
				onBlur={onBlur}
				name={'password'}
				/>
			}}
			/>
			<div className="flex items-center justify-between pt-3">
				<Link to={'/'}>
					<div className="font-medium underline text-light-dark">
					Forgot password?
					</div>
				</Link>
				<BaseButton label='Sign Up'/>
			</div>
		</form>
	)
}