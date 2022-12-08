import { useEffect } from 'react'

import { Card } from '@/entities/card'
import { ProductType } from '@/shared/lib/types'
import { useGetRecommendedProducts } from '@/shared/lib/useGetRecommended'
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import recommendedGirl from './assets/recommendedGirl.webp'
export const RecommendedPage = () => {
	const {recommended, getRecommended} = useGetRecommendedProducts()
	useEffect(() => {
		if(!recommended.length) getRecommended()
	}, [])
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
				<HeroLayout image={recommendedGirl}>
					<div className="text-[48px] font-light mb-5">Recommended Products</div>
				</HeroLayout>
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