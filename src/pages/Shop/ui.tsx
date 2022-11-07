import React,{ useEffect } from "react"
import { productModel } from "@/entities/products"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { UIloadmore } from "@/shared/ui/buttons/loadmore"
import { Layout } from "@/shared/ui/layout"
import { ErrorNotifyDisplay } from "@/shared/ui/notifications/errors"
import { Skeleton } from "@/shared/ui/skeleton"
import { ShopCard } from "@/widgets/shop-card"
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
		<Layout>
			<div className="container relative">
				{selectors.requestStatus && <ErrorNotifyDisplay 
									message={selectors.requestStatus || 'Something went wrong :('} 
									method={() => fetchProducts(selectors.lastRefKey)}/>}
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
						: selectors.products.map(({image, name,subtitle, price}, id) => {
						return (
							<div key={id}>
								<ShopCard 
								image={image} 
								name={name} 
								subtitle={subtitle}
								price={price}
								isFetching={selectors.isFetching}
								/>
							</div>
						)
					})}
					</div>
				</div>
				<div className="w-full flex justify-center">
				{selectors.lastRefKey && <UIloadmore 
								onLoadMore={() => fetchProducts(selectors.lastRefKey)} 
								isFetching={selectors.isFetching}
								/>}
				</div>
			</div>
		</Layout>
	)
}


export default ShopPage