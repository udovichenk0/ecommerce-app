import React from "react"
import { Auth, GitHubSignIn, GoogleSignIn } from "@/features/auth"
import { SignBtn } from "@/shared/ui/buttons/SignIn"
import { Layout } from "@/shared/ui/layout"
import { Modal } from "@/shared/ui/modal"
export const SignIn = () => {
	return (
		<Layout>
			<div className="h-full w-full flex justify-center items-center">
				<Modal 
				title={'Sign in to Salinaka'} 
				form={<Auth.SignIn.AuthForm/>}
				SignButton={<SignBtn title="Sign Up" link="/signup"/>}
				text={`Don't have an account?`}
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

export default SignIn