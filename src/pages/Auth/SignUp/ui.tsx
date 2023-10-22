import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"

import { AuthSignUpForm } from "@/features/auth/by-email"

import { Layout } from "@/shared/ui/layouts"
import { Button } from "@/shared/ui/buttons/main"
import { routes } from "@/shared/config/routes"
export const SignUp = () => {
  return (
    <Layout header={<Header />}>
      <AuthForm
        title={"Sign up to Salinaka"}
        button={
          <Button as="link" to={routes.signin} intent={"outline"}>
            Sign In
          </Button>
        }
        text="Have an account?"
      >
        <AuthSignUpForm />
      </AuthForm>
    </Layout>
  )
}

export default SignUp
