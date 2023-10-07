import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Card } from "@/entities/card"
import { BaseButton } from "@/shared/ui/buttons"
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import woman from './assets/woman.png'
import { homePage } from "./home.model"

export const Home = () => {
	const recommendedProducts = useSelector(homePage.$$recommendedProducts.selectors.products)
	const featuredProducts = useSelector(homePage.$$featuredProducts.selectors.products)
	const navigate = useNavigate()
	return (
		<Layout header={<Header/>}>
				<HeroLayout image={woman}>
					<div className="text-[37px] lg:text-[48px] font-light leading-[0px] mb-6"><span className="font-medium leading-[0px]">See</span>  everything</div>
					<div className="text-[37px] lg:text-[48px] font-light mb-5">with <span className="font-medium">Clarity</span> </div>
					<p className="mb-10 text-light-dark text-base font-semibold">
						Buying eyewear should leave you happy and good-looking, with money in your pocket. 
						Glasses, sunglasses, and contacts—we have got your eyes covered.
					</p>
					<BaseButton size="lg" label="Shop Now" action={() => navigate('shop')}/>
				</HeroLayout>
				<div className="px-10 mt-28">
					<Panel title={'Featured Products'} link={'featured'}/>
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							featuredProducts?.map(({name, image, subtitle, id}:any, ind: number) => {
								return (
									<Card key={ind} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
				<div className="px-10 mt-28">
					<Panel title={'Recommended Products'} link={'recommended'}/>
					<div className="grid grid-cols-auto-fit gap-5">
						{
							recommendedProducts?.map(({name, image, subtitle, id}:any, ind: number) => {
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