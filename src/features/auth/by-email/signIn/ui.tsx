import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useAction } from "@/shared/lib/redux-std"
import { BaseButton } from "@/shared/ui/buttons"
import { TextInput } from "@/shared/ui/inputs"

import { signInWithEmailFx } from "./signin.modal"


export const AuthSignInForm = () => {
	const startSignInWithEmail = useAction(signInWithEmailFx)
	const {handleSubmit, control, formState:{errors}} = useForm({
		mode: 'onBlur',
		defaultValues: {
			email: '',
			password: '',
		}
	})
	return (
		<form onSubmit={handleSubmit(startSignInWithEmail)} className='flex flex-col w-full gap-1'>
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
				<BaseButton size="lg" action={handleSubmit(startSignInWithEmail)} label='Sign In'/>
			</div>
		</form>
	)
}