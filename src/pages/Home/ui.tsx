import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { Card } from "@/entities/card"
import { useGetFeatureProducts } from "@/shared/lib/useGetFeatureProducts"
import { useGetRecommendedProducts } from "@/shared/lib/useGetRecommended"
import { BaseButton } from "@/shared/ui/buttons"
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import woman from './assets/woman.png'

export const Home = () => {
	const {featured, getFeatured} = useGetFeatureProducts()
	const navigate = useNavigate()
	const {getRecommended, recommended} = useGetRecommendedProducts()
	useEffect(() => {
		getFeatured()
		getRecommended()
	}, [])
	return (
		<Layout header={<Header/>}>
				<HeroLayout image={woman}>
					<div className="p-8 md:basis-1/2">
						<div className="text-[37px] lg:text-[48px] font-light leading-[0px] mb-6"><span className="font-medium leading-[0px]">See</span>  everything</div>
						<div className="text-[37px] lg:text-[48px] font-light mb-5">with <span className="font-medium">Clarity</span> </div>
						<p className="mb-10 text-light-dark text-base font-semibold">
						Buying eyewear should leave you happy and good-looking, with money in your pocket. 
						Glasses, sunglasses, and contacts—we have got your eyes covered.
						</p>
						<BaseButton label="Shop Now" action={() => navigate('shop')}/>
					</div>
				</HeroLayout>
				<div className="px-10 mt-28">
					<Panel title={'Featured Products'} link={'/featured'}/>
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							featured?.map(({name, image, subtitle, id}:any, ind: number) => {
								return (
									<Card key={ind} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
				<div className="px-10 mt-28">
					<Panel title={'Recommended Products'} link={'/recommended'}/>
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							recommended?.map(({name, image, subtitle, id}:any, ind: number) => {
								return (
									<Card key={ind} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
		</Layout>
	)
}