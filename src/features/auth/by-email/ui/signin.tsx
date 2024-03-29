import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useAction } from "@/shared/lib/redux-std"
import { Button } from "@/shared/ui/buttons/main"
import { TextInput } from "@/shared/ui/inputs"
import { routes } from "@/shared/config/routes"

import { signInWithEmailFx } from "../model/signin"

export const AuthSignInForm = () => {
  const signinWithEmail = useAction(signInWithEmailFx)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  })
  return (
    <form
      onSubmit={handleSubmit(signinWithEmail)}
      className="flex w-full flex-col gap-1"
    >
      <Controller
        name="email"
        control={control}
        rules={{
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address",
          },
        }}
        render={({ field: { onChange, value, ref, onBlur } }) => {
          return (
            <TextInput
              inputRef={ref}
              value={value}
              onChange={onChange}
              label={"Email"}
              placeholder={"test@example.com"}
              error={errors?.email}
              onBlur={onBlur}
              name={"email"}
            />
          )
        }}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
        }}
        render={({ field: { onChange, value, ref, onBlur } }) => {
          return (
            <TextInput
              inputRef={ref}
              value={value}
              onChange={onChange}
              label={"Password"}
              placeholder={"Your password"}
              error={errors?.password}
              onBlur={onBlur}
              name={"password"}
            />
          )
        }}
      />
      <div className="flex items-center justify-between pt-3">
        <Link to={routes.home}>
          <div className="font-medium text-light-dark underline">
            Forgot password?
          </div>
        </Link>
        <Button onClick={handleSubmit(signinWithEmail)}>Sign In</Button>
      </div>
    </form>
  )
}
