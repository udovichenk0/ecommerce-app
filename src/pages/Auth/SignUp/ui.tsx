import { useNavigate } from "react-router-dom"

import { AuthForm } from "@/widgets/auth-form"
import { Header } from "@/widgets/header"

import { AuthSignUpForm } from "@/features/auth"

import { Layout } from "@/shared/ui/layouts"
import { Button } from "@/shared/ui/buttons/main"
export const SignUp = () => {
  const navigate = useNavigate()
  return (
    <Layout header={<Header />}>
      <AuthForm
        title={"Sign up to Salinaka"}
        form={<AuthSignUpForm />}
        button={
          <Button 
            onClick={() => navigate('/auth/signin')}
            size={'sm'} 
            intent={'outline'}>
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
