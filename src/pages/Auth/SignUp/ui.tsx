import { Link } from "react-router-dom"

import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"

import { AuthSignUpForm } from "@/features/auth"

import { Layout } from "@/shared/ui/layouts"
import { mainVariant } from "@/shared/ui/buttons/main"
import { routes } from "@/shared/config/routes"
export const SignUp = () => {
  return (
    <Layout header={<Header />}>
      <AuthForm
        title={"Sign up to Salinaka"}
        form={<AuthSignUpForm />}
        button={
          <Link
            to={routes.signin}
            className={mainVariant({ intent: "outline" })}
          >
            Sign In
          </Link>
        }
        text="Have an account?"
      >
        <AuthSignUpForm />
      </AuthForm>
    </Layout>
  )
}

export default SignUp
