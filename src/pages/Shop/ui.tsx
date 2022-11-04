import { productModel } from "@/entities/products"
import { LoadMore } from "@/features/loadmore"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layout"
import { Skeleton } from "@/shared/ui/skeleton"
import { ShopCard } from "@/widgets/shop-card"
import { useEffect } from "react"
export const ShopPage = () => {
	const fetchProducts = useAction(productModel.actions.startFetching)
	const products = useAppSelector(productModel.selectors.products)
	const isFetching = useAppSelector(productModel.selectors.isFetching)
	const lastRefKey = useAppSelector(productModel.selectors.lastRefKey)
	useEffect(() => {
		fetchProducts(lastRefKey)
	}, [])
	return (	
		<Layout>
			<div className="container py-20">
				<div className="mb-16">
					<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] w-full justify-center gap-5">
						{!products.length
						? 
						new Array(12).fill('').map((el,id) => {
							return (
								<div key={id}>
									<Skeleton/>
								</div>
							)
						})
						: products.map(({image, name,subtitle, price,}, id) => {
						return (
							<div key={id}>
								<ShopCard 
								image={image} 
								name={name} 
								subtitle={subtitle}
								price={price}
								isFetching={isFetching}
								/>
							</div>
						)
					})}
					</div>
				</div>
				<div className="w-full flex justify-center">
				{lastRefKey && <LoadMore method={fetchProducts} lastRefKey={lastRefKey}/>}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage