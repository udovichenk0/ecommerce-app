import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import PhoneInput from "react-phone-input-2"
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'

import { basketModel } from "@/entities/basket"
import { viewerModel } from "@/entities/session"
import { countTotalPrice } from "@/shared/lib/count-total-price"
import { useAppSelector } from "@/shared/lib/redux-std"
import { BaseButton, LightButton } from "@/shared/ui/buttons"
import { InputEditor } from "@/shared/ui/inputs"
import { Layout } from "@/shared/ui/layouts"
import { CheckoutTemplate } from "@/widgets/checkout-layout"
import { Header } from "@/widgets/header"

import { DoneSvg } from "../assets"
import { SubmitButton } from "../ui"

export const ShipDetail = () => {
	const navigate = useNavigate()
	const profile = useAppSelector(viewerModel.selectors.profile)
	const basket = useAppSelector(basketModel.selectors.basket)
	const [checkbox, setCheckbox] = useState<boolean>(false)
	const scheme = yup.object({
		email: yup.string().email('Email is not valid').required('Email address is required'),
		name: yup.string().min(4, 'Full name should be at least 4 characters.').required('Full name is required'),
		address: yup.string().required('Shipping address is required.')
	})
	const {register, control, handleSubmit, formState: {errors}} = useForm({
		defaultValues: {
			email: profile.email,
			name: profile.name,
			address: profile.address,
			mobile: profile.mobile
		},
		resolver: yupResolver(scheme)
	})
	const handleOnSubmit = (data:any) => {
		navigate('/checkout/step3')
	}
	return (
		<Layout header={<Header/>}>
			<form onSubmit={handleSubmit(handleOnSubmit)} className="mb-10 w-full">
				<CheckoutTemplate 
				step={2} 
				backBtn={<LightButton label="Go Back" action={() => navigate(-1)}/>}
				nextBtn={<SubmitButton label="Next Step" action={handleSubmit(handleOnSubmit)}/>}>
						<h2 className="text-2xl font-bold mb-5">Shipping Details</h2>
						<div className="w-full flex flex-col">
							<div className="flex justify-between w-full gap-5 mb-10">
								<InputEditor label='* Full Name' register={register} name='name' errors={errors}/>
								<InputEditor label='* Email Address' register={register} name='email' errors={errors}/>
							</div>
							<div className="flex items-end gap-5">
								<InputEditor placeholder={'#245 Brgy. Maligalig, Arayat Pampanga, Philippines'} errors={errors}
								label='Address (Will be used for checkout)' register={register} name='address'/>
								<Controller
									control={control}
									name={'mobile'}
									render={({field: { onChange, value }}) => {
										return <PhoneInput
										country={'ua'}
										value={value}
										onChange={onChange}
										/>
									}}
									/>
							</div>
						</div>
							<>
								<p className="text-[#696868] font-bold p-4">Shipping Option</p>
								<div className="w-full bg-[#f1f1f1] mb-5 border-2 border-[#e1e1e1] p-7 flex items-center justify-between">
									<div className="flex">
										<label htmlFor="checkbox" 
										className={`relative mr-8 
										before:content-[''] before:p-[10px] before:border-2  ${checkbox?'before:border-black before:bg-black' : 'before:bg-white before:border-[#e1e1e1]'} before:cursor-pointer before:absolute before:rounded-full`}>
											<div className="absolute top-0 left-[2px]">
												<DoneSvg color={checkbox? 'white' : '#e1e1e1'}/>
											</div>
										</label>
											<input type="checkbox" id="checkbox"
											className="mr-3 hidden w-full h-auto"
											onChange={() => setCheckbox(prev => !prev)}/>
											<p className="font-bold text-[#1a1a1a]">International Shipping  7-14 days</p>
									</div>
									<span className="font-bold text-[#1a1a1a]">$50.00</span>
								</div>
							</>
						<div className="w-full flex justify-end gap-4">
							<div className="grid grid-rows-3">
								<h2 className="flex justify-end">International Shipping:</h2>
								<h2 className="flex justify-end">Subtotal:</h2>
								<h2 className="flex justify-end">Total:</h2>
							</div>
							<div>
								<p className="flex justify-end">{checkbox? '$50.00': '$0.00'}</p>
								<p className="flex justify-end">${countTotalPrice(basket)}</p>
								<p className="flex justify-end">{checkbox? countTotalPrice(basket) + 50 : countTotalPrice(basket)}</p>
							</div>
						</div>
				</CheckoutTemplate>
				</form>
		</Layout>
	)
}