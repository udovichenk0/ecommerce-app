import { Link } from "react-router-dom"

import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"

import { AuthSignInForm } from "@/features/auth"

import { Layout } from "@/shared/ui/layouts"
import { mainVariant } from "@/shared/ui/buttons/main"
import { routes } from "@/shared/config/routes"

export const SignIn = () => {
  return (
    <Layout header={<Header />}>
      <AuthForm
        title={"Sign in to Salinaka"}
        button={
          <Link to={routes.signup} className={mainVariant()}>Sign Up</Link>
        }
        text={`Don't have an account?`}
      >
        <AuthSignInForm />
      </AuthForm>
    </Layout>
  )
}

export default SignIn
