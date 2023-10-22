import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"

import { useAction } from "@/shared/lib/redux-std"
import { Button } from "@/shared/ui/buttons/main"
import { TextInput } from "@/shared/ui/inputs"
import { routes } from "@/shared/config/routes"

import { signUpWithEmailFx } from "../model/signup"

export const AuthSignUpForm = () => {
  const startAuth = useAction(signUpWithEmailFx)
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
    },
  })
  const onSubmit = (data: {
    email: string
    password: string
    fullName: string
  }) => {
    startAuth({
      email: data.email,
      password: data.password,
      fullName: data.fullName,
    })
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-1"
    >
      <Controller
        name="fullName"
        control={control}
        rules={{
          required: "Full name is required",
        }}
        render={({ field: { onChange, value, ref, onBlur } }) => {
          return (
            <TextInput
              inputRef={ref}
              value={value}
              onChange={onChange}
              label={"Full name"}
              placeholder={"John Doe"}
              error={errors?.fullName}
              onBlur={onBlur}
              name={"fullName"}
            />
          )
        }}
      />
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
        <Button onClick={handleSubmit(onSubmit)}>Sign Up</Button>
      </div>
    </form>
  )
}
