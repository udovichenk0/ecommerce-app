import { useNavigate } from "react-router-dom"

import { AuthSignUpForm } from "@/features/auth"
import { LightButton } from "@/shared/ui/buttons"
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
				button={<LightButton label="Sign In" action={() => navigate('/auth/signin')}/>}
				text='Have an account?'>
					<AuthSignUpForm/>
				</AuthForm>
		</Layout>
	)
}

export default SignUp