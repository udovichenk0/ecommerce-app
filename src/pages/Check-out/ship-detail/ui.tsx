import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"

import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

import { basketModel } from "@/entities/basket"
import { sessionModel } from "@/entities/session"

import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { InputEditor } from "@/shared/ui/inputs"
import { Layout } from "@/shared/ui/layouts"
import { Button } from "@/shared/ui/buttons/main"

import { DoneSvg } from "../assets"
import { SubmitButton } from "../ui"

export const ShipDetail = () => {
  const navigate = useNavigate()
  const profile = useAppSelector(sessionModel.selectors.profile)
  const basket = useAppSelector(basketModel.selectors.basket)
  const [checkbox, setCheckbox] = useState<boolean>(false)
  const scheme = yup.object({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email address is required"),
    name: yup
      .string()
      .min(4, "Full name should be at least 4 characters.")
      .required("Full name is required"),
    address: yup.string().required("Shipping address is required."),
  })
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: profile.email,
      name: profile.name,
      address: profile.address,
      mobile: profile.mobile,
    },
    resolver: yupResolver(scheme),
  })
  const handleOnSubmit = () => {
    navigate("/checkout/step3")
  }
  return (
    <Layout header={<Header />}>
      <form onSubmit={handleSubmit(handleOnSubmit)} className="mb-10 w-full">
        <CheckoutTemplate
          step={2}
          backBtn={
            <Button size="sm" intent={"outline"} onClick={() => navigate(-1)}>
              'Go Back'
            </Button>
          }
          nextBtn={
            <SubmitButton
              label="Next Step"
              action={handleSubmit(handleOnSubmit)}
            />
          }
        >
          <h2 className="mb-5 text-2xl font-bold">Shipping Details</h2>
          <div className="flex w-full flex-col">
            <div className="mb-10 flex w-full justify-between gap-5">
              <InputEditor
                label="* Full Name"
                register={register}
                name="name"
                errors={errors}
              />
              <InputEditor
                label="* Email Address"
                register={register}
                name="email"
                errors={errors}
              />
            </div>
            <div className="flex items-end gap-5">
              <InputEditor
                placeholder={
                  "#245 Brgy. Maligalig, Arayat Pampanga, Philippines"
                }
                errors={errors}
                label="Address (Will be used for checkout)"
                register={register}
                name="address"
              />
              <Controller
                control={control}
                name={"mobile"}
                render={({ field: { onChange, value } }) => {
                  return (
                    <PhoneInput
                      country={"ua"}
                      value={value}
                      onChange={onChange}
                    />
                  )
                }}
              />
            </div>
          </div>
          <>
            <p className="p-4 font-bold text-[#696868]">Shipping Option</p>
            <div className="mb-5 flex w-full items-center justify-between border-2 border-[#e1e1e1] bg-[#f1f1f1] p-7">
              <div className="flex">
                <label
                  htmlFor="checkbox"
                  className={`relative mr-8 
										before:border-2 before:p-[10px] before:content-['']  ${
                      checkbox
                        ? "before:border-black before:bg-black"
                        : "before:border-[#e1e1e1] before:bg-white"
                    } before:absolute before:cursor-pointer before:rounded-full`}
                >
                  <div className="absolute left-[2px] top-0">
                    <DoneSvg color={checkbox ? "white" : "#e1e1e1"} />
                  </div>
                </label>
                <input
                  type="checkbox"
                  id="checkbox"
                  className="mr-3 hidden h-auto w-full"
                  onChange={() => setCheckbox((prev) => !prev)}
                />
                <p className="font-bold text-[#1a1a1a]">
                  International Shipping 7-14 days
                </p>
              </div>
              <span className="font-bold text-[#1a1a1a]">$50.00</span>
            </div>
          </>
          <div className="flex w-full justify-end gap-4">
            <div className="grid grid-rows-3">
              <h2 className="flex justify-end">International Shipping:</h2>
              <h2 className="flex justify-end">Subtotal:</h2>
              <h2 className="flex justify-end">Total:</h2>
            </div>
            <div>
              <p className="flex justify-end">
                {checkbox ? "$50.00" : "$0.00"}
              </p>
              <p className="flex justify-end">${countTotalPrice(basket)}</p>
              <p className="flex justify-end">
                {checkbox
                  ? countTotalPrice(basket) + 50
                  : countTotalPrice(basket)}
              </p>
            </div>
          </div>
        </CheckoutTemplate>
      </form>
    </Layout>
  )
}
