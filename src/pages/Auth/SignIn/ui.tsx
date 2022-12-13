import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { viewerModel } from "@/entities/session";
import { AuthSignInForm } from "@/features/auth"
import { useAppSelector } from "@/shared/lib/redux-std";
import { SquareButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { AuthForm } from "@/widgets/auth-form";
import { Header } from "@/widgets/header"
export const SignIn = () => {
const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
			<AuthForm 
				title={'Sign in to Salinaka'} 
				button={<SquareButton label="Sign Up" action={() => navigate('/signup')}/>}
				text={`Don't have an account?`}>
				<AuthSignInForm/>
			</AuthForm>
		</Layout>
	)
}

export default SignIn