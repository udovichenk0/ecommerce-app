import { useDispatch, useSelector } from "react-redux"

import { ShopCard } from "@/entities/card/shop-card"
import { useAction } from "@/shared/lib/redux-std"
import { BaseButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { Skeleton } from "@/shared/ui/skeleton"
import { Header } from "@/widgets/header"

import { shopPage } from "./shop.model"

export const ShopPage = () => {
	const getNextProducts = useAction(shopPage.getNextProductFx)
	const products = useSelector(shopPage.$$products.selectors.products)
	const lastRefKey = useSelector(shopPage.$$products.selectors.products)
	const isLoading = useSelector(shopPage.$$products.selectors.isLoading)
	return (	
		<Layout header={<Header/>}>
			<div className="container relative">
				<div className="mb-16">
					<div className="grid grid-cols-auto-fit w-full justify-center gap-5">
						{isLoading 
						? 
						new Array(12).fill('').map((_,id) => {
							return (
								<div key={id}>
									<Skeleton/>
								</div>
							)
						})
						: products.map(({image, name,subtitle, price, id}) => {
						return (
							<div key={id} className='flex justify-center'>
								<ShopCard 
									image={image} 
									name={name} 
									subtitle={subtitle}
									price={price}
									isFetching={isLoading}
									id={id}
								/>
							</div>
						)
					})}
					</div>
				</div>
				<div className="w-full flex justify-center pb-28">
				{lastRefKey && <BaseButton size="xl" action={getNextProducts} label='Show more items'/>}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage