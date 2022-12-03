import { useEffect } from 'react'

import { Card } from '@/entities/card'
import { ProductType } from '@/shared/lib/types'
import { useGetFeatureProducts } from '@/shared/lib/useGetFeatureProducts'
import { Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"

// eslint-disable-next-line import/no-internal-modules
import featuredGuy from './assets/featuredGuy.webp'

export const FeaturedPage = () => {
	const {featured, getFeatured} = useGetFeatureProducts()
	useEffect(() => {
		if(!featured.length) getFeatured()
	}, [])
	return (
		<Layout header={<Header/>}>
			<div className="container pb-28 h-full">
			<section className=" bg-[#f3f3f3] flex items-center h-[400px]">
					<div className=" basis-1/2 p-8">
						<div className="text-[48px] font-light mb-5">Featured Products</div>
					</div>
					<div className="h-full w-full bg-cover basis-1/2">
						<img src={featuredGuy} className='h-full bg-contain w-full object-cover' alt="smiling-man" />
					</div>
				</section>
				<div className="px-10 mt-28">
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							featured?.map(({name, image, subtitle, id}:ProductType) => {
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