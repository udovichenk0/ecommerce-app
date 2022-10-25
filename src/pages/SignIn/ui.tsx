import { Auth, GitHubSignIn, GoogleSignIn } from "@/features/auth"
import { Layout } from "@/shared/ui/layout"
import { Modal } from "@/shared/ui/modal"
// GitHubAuth
export const SignIn = () => {
	return (
		<Layout>
			<div className="h-full w-full flex justify-center items-center">
				<Modal title={'Sign in to Salinaka'} form={<Auth.SignIn.AuthForm/>}>
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