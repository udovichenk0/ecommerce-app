import { productModel } from "@/entities/products"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layout"
import { Skeleton } from "@/shared/ui/skeleton"
import { ShopCard } from "@/widgets/shop-card"
import { useEffect } from "react"
export const ShopPage = () => {
	const fetchProducts = useAction(productModel.actions.startFetching)
	
	useEffect(() => {
		fetchProducts()
	}, [])
	const products = useAppSelector(productModel.selectors.products)
	const isFetching = useAppSelector(productModel.selectors.isFetching)
	return (	
		<Layout>
			<div className="container">
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
					: products.map(({glasses, title,subtitle, price,}, id) => {
					return (
						<div key={id}>
							<ShopCard 
							glasses={glasses} 
							title={title} 
							subtitle={subtitle}
							price={price}
							isFetching={isFetching}
							/>
						</div>
					)
				})}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage