import { ShopNow } from "@/shared/ui/buttons/ShopNow/ui"
import { Layout } from "@/shared/ui/layout"
import woman from '@/shared/assets/woman.png'
import { Grid } from "@/widgets/grid"
import { api } from "@/shared/api"
export const Home = () => {
	return (
		<Layout>
			<div className="container">
				<section className=" bg-[#f3f3f3] flex items-center h-[400px] mb-28">
					<div className=" basis-1/2 p-8">
						<div className="text-[48px] font-light leading-[0px] mb-6"><span className="font-medium leading-[0px]">See</span>  everything</div>
						<div className="text-[48px] font-light mb-5">with <span className="font-medium">Clarity</span> </div>
						<p className="mb-10 text-light-dark text-base font-semibold">
						Buying eyewear should leave you happy and good-looking, with money in your pocket. 
						Glasses, sunglasses, and contacts—we have got your eyes covered.
						</p>
						<ShopNow/>
					</div>
					<div className="h-full w-full bg-cover basis-1/2">
						<img src={woman} className='h-full bg-contain w-full object-cover' alt="" />
					</div>
				</section>
				<Grid data={api.featured}/>
			</div>
		</Layout>
	)
}