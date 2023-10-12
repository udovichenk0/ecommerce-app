import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"

export const useGetForm = (profile: any) => {
  const scheme = yup.object({
    name: yup
      .string()
      .min(4, "Full name should be at least 4 characters.")
      .required("Full name is required"),
  })
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: profile.email,
      name: profile.name,
      avatar: profile.avatar,
      address: profile.address,
      mobile: profile.mobile,
    },
    resolver: yupResolver(scheme),
  })
  return {
    register,
    handleSubmit,
    control,
    errors,
  }
}
