import { useEffect } from 'react'

import { Card } from '@/entities/card'
// eslint-disable-next-line import/no-internal-modules
import recommendedGirl from '@/shared/assets/recommendedGirl.webp'
import { ProductType } from '@/shared/lib/types'
import { useGetRecommendedProducts } from '@/shared/lib/useGetRecommended'
import { Layout } from "@/shared/ui/layouts/layout"
import { Header } from "@/widgets/header"
export const RecommendedPage = () => {
	const {recommended, getRecommended} = useGetRecommendedProducts()
	useEffect(() => {
		if(!recommended.length) getRecommended()
	}, [])
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
			<section className=" bg-[#f3f3f3] flex items-center h-[400px]">
					<div className=" basis-1/2 p-8">
						<div className="text-[48px] font-light mb-5">Recommended Products</div>

					</div>
					<div className="h-full w-full bg-cover basis-1/2">
						<img src={recommendedGirl} className='h-full bg-contain w-full object-cover' alt="" />
					</div>
				</section>
				<div className="px-10 mt-28">
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							recommended?.map(({name, image, subtitle, id}:ProductType, ind: number) => {
								return (
									<Card key={ind} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}