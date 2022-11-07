import React from "react"

import { Auth, GitHubSignIn, GoogleSignIn } from "@/features/auth"
import { SignBtn } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layout"
import { Modal } from "@/shared/ui/modal"
import { Header } from "@/widgets/header"
export const SignUp = () => {
	return (
		<Layout header={<Header/>}>
			<div className="h-full w-full flex justify-center items-center">
				<Modal 
				title={'Sign up to Salinaka'} 
				form={<Auth.SignUp.AuthForm/>}
				SignButton={<SignBtn title="Sign In" link="/signin"/>}
				text='Have an account?'
				>
					<div className="w-[60%] flex flex-col gap-3">
						<GitHubSignIn.GitHubAuth/>
						<GoogleSignIn.GoogleAuth/>
					</div>
				</Modal>
			</div>
		</Layout>
	)
}

export default SignUp