import { useNavigate } from "react-router-dom"

import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"

import { AuthSignInForm } from "@/features/auth"

import { Layout } from "@/shared/ui/layouts"
import { Button } from "@/shared/ui/buttons/main"

export const SignIn = () => {
  const navigate = useNavigate()
  return (
    <Layout header={<Header />}>
      <AuthForm
        title={"Sign in to Salinaka"}
        button={
          <Button 
            size={'sm'}
            intent={'outline'}
            onClick={() => navigate("/auth/signup")}
          >
            Sign Up
          </Button>
        }
        text={`Don't have an account?`}
      >
        <AuthSignInForm />
      </AuthForm>
    </Layout>
  )
}

export default SignIn
