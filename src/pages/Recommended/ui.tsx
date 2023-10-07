import { useSelector } from 'react-redux'

import { Card } from '@/entities/card'
import { Product } from '@/shared/api/product'
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import recommendedGirl from './assets/recommendedGirl.webp'
import { recommendedPage } from './recommended.model'
export const RecommendedPage = () => {
	const recommendedProducts = useSelector(recommendedPage.$$product.selectors.products)
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
				<HeroLayout image={recommendedGirl}>
					<div className="text-[48px] font-light mb-5">Recommended Products</div>
				</HeroLayout>
				<div className="px-10 mt-28">
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							recommendedProducts?.map(({name, image, subtitle, id}:Product, ind: number) => {
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