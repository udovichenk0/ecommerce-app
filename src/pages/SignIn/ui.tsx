import { Auth } from "@/features/auth"
import { Layout } from "@/shared/ui/layout"
import { Modal } from "@/shared/ui/modal"

export const SignIn = () => {
	return (
		<Layout>
			<div className="h-full w-full flex justify-center items-center">
				<Modal title={'Sign in to Salinaka'}>
					<Auth.SignIn.AuthForm/>
				</Modal>
			</div>
		</Layout>
	)
}

export default SignIn