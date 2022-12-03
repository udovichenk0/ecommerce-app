import { useNavigate } from "react-router-dom";

import { AuthSignInForm } from "@/features/auth"
import { LGreyButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { AuthForm } from "@/widgets/auth-form";
import { Header } from "@/widgets/header"
export const SignIn = () => {
const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
			<AuthForm 
				title={'Sign in to Salinaka'} 
				button={<LGreyButton label="Sign Up" action={() => navigate('/signup')}/>}
				text={`Don't have an account?`}>
				<AuthSignInForm/>
			</AuthForm>
		</Layout>
	)
}

export default SignIn