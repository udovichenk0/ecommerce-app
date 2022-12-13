import { useEffect } from "react"

import { ShopCard } from "@/entities/card/shop-card"
import { productModel } from "@/entities/products"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { BaseButton } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { Skeleton } from "@/shared/ui/skeleton"
import { Header } from "@/widgets/header"
export const ShopPage = () => {
	const selectors = ({
		products: useAppSelector(productModel.selectors.products),
		isFetching: useAppSelector(productModel.selectors.isFetching),
		lastRefKey: useAppSelector(productModel.selectors.lastRefKey),
		requestStatus: useAppSelector(productModel.selectors.requestStatus)
	})
	const fetchProducts = useAction(productModel.actions.startFetching)
	useEffect(() => {
		if(!selectors.lastRefKey)
		fetchProducts(selectors.lastRefKey)
	}, [])
	return (	
		<Layout header={<Header/>}>
			<div className="container relative">
				<div className="mb-16">
					<div className="grid grid-cols-auto-fit w-full justify-center gap-5">
						{!selectors.products.length 
						? 
						new Array(12).fill('').map((_,id) => {
							return (
								<div key={id}>
									<Skeleton/>
								</div>
							)
						})
						: selectors.products.map(({image, name,subtitle, price, id}) => {
						return (
							<div key={id} className='flex justify-center'>
								<ShopCard 
								image={image} 
								name={name} 
								subtitle={subtitle}
								price={price}
								isFetching={selectors.isFetching}
								id={id}
								/>
							</div>
						)
					})}
					</div>
				</div>
				<div className="w-full flex justify-center pb-28">
				{selectors.lastRefKey && <BaseButton size="xl" action={() => fetchProducts(selectors.lastRefKey)} label='Show more items'/>}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage