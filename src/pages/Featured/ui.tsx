import { useSelector } from 'react-redux'

import { Card } from '@/entities/card'
import { Product } from '@/shared/api/product'
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import featuredGuy from './assets/featuredGuy.webp'
import { featurePage } from './featured.model'

export const FeaturedPage = () => {
	const products = useSelector(featurePage.$$product.selectors.products)
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
			<HeroLayout image={featuredGuy}>
				<div className="text-[48px] font-light mb-5">Featured Products</div>
			</HeroLayout>
				<div className="px-10 mt-28">
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							products?.map(({name, image, subtitle, id}:Product) => {
								return (
									<Card key={id} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}