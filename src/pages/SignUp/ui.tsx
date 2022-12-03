import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { viewerModel } from "@/entities/session"
import { AuthSignUpForm } from "@/features/auth"
import { useAppSelector } from "@/shared/lib/redux-std"
import { useAuth } from "@/shared/lib/useAuth"
import { LGreyButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"
export const SignUp = () => {

	const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
				<AuthForm 
				title={'Sign up to Salinaka'} 
				form={<AuthSignUpForm/>}
				button={<LGreyButton label="Sign In" action={() => navigate('/signin')}/>}
				text='Have an account?'>
					<AuthSignUpForm/>
				</AuthForm>
		</Layout>
	)
}

export default SignUp