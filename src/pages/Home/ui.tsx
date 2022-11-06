import { ShopNow } from "@/shared/ui/buttons/ArrowBtn/ui"
import { Layout } from "@/shared/ui/layout"
import woman from '@/shared/assets/woman.png'
import { Grid } from "@/widgets/grid"
import { api } from "@/shared/api"
import { useGetFeatureProducts } from "@/shared/lib/useGetFeatureProducts"
import { useEffect } from "react"
import { useGetRecommendedProducts } from "@/shared/lib/useGetRecommended"

export const Home = () => {
	const {featured, getFeatured, isFeatureLoading} = useGetFeatureProducts()
	const {getRecommended, recommended, isRecommendLoading} = useGetRecommendedProducts()
	useEffect(() => {
		getFeatured()
		console.log(featured)
		getRecommended()
	}, [])
	return (
		<Layout>
			<div className="container pb-28 h-full">
				<section className=" bg-[#f3f3f3] flex items-center h-[400px]">
					<div className=" basis-1/2 p-8">
						<div className="text-[48px] font-light leading-[0px] mb-6"><span className="font-medium leading-[0px]">See</span>  everything</div>
						<div className="text-[48px] font-light mb-5">with <span className="font-medium">Clarity</span> </div>
						<p className="mb-10 text-light-dark text-base font-semibold">
						Buying eyewear should leave you happy and good-looking, with money in your pocket. 
						Glasses, sunglasses, and contacts—we have got your eyes covered.
						</p>
						<ShopNow title="Show Now"/>
					</div>
					<div className="h-full w-full bg-cover basis-1/2">
						<img src={woman} className='h-full bg-contain w-full object-cover' alt="" />
					</div>
				</section>
				<Grid data={featured} title={'Featured Products'} link={'/'}/>
				<Grid data={recommended} title={'Recommended Products'} link={'/'}/>
			</div>
		</Layout>
	)
}