import { productModel } from "@/entities/products"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { UIloadmore } from "@/shared/ui/buttons/loadmore"
import { Layout } from "@/shared/ui/layout"
import { ErrorNotifyDisplay } from "@/shared/ui/notifications/errors"
import { Skeleton } from "@/shared/ui/skeleton"
import { ShopCard } from "@/widgets/shop-card"
import { useEffect } from "react"
export const ShopPage = () => {
	const fetchProducts = useAction(productModel.actions.startFetching)
	const products = useAppSelector(productModel.selectors.products)
	const isFetching = useAppSelector(productModel.selectors.isFetching)
	const lastRefKey = useAppSelector(productModel.selectors.lastRefKey)
	const requestStatus = useAppSelector(productModel.selectors.requestStatus)
	useEffect(() => {
		fetchProducts(lastRefKey)
	}, [])
	return (	
		<Layout>
			<div className="container py-20 relative">
				{requestStatus && <ErrorNotifyDisplay 
									message={requestStatus || 'Something went wrong :('} 
									method={() => fetchProducts(lastRefKey)}/>}
				<div className="mb-16">
					<div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] w-full justify-center gap-5">
						{!products.length
						? 
						new Array(12).fill('').map((_,id) => {
							return (
								<div key={id}>
									<Skeleton/>
								</div>
							)
						})
						: products.map(({image, name,subtitle, price}, id) => {
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
				{lastRefKey && <UIloadmore 
								onLoadMore={() => fetchProducts(lastRefKey)} 
								isFetching={isFetching}
								/>}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage