import { ShopCard } from "@/entities/card/shop-card"
import { searchModel } from "@/features/search"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"
import { Loader } from "@/shared/ui/spinner"
import { Header } from "@/widgets/header"

import { NotFound } from "./notFound"
import { Template } from "./template"

const SearchPage = () => {
	const searchProducts = useAppSelector(searchModel.selectors.searchedProducts)
	const isFetching = useAppSelector(searchModel.selectors.isSearchedFetching)
	console.log(isFetching)
	return (
		<Layout header={<Header/>}>
				<div className="container grid grid-cols-auto-fit gap-5 justify-center">
					{isFetching
					? <div className="h-full flex items-center justify-center">
						<Loader/>
					</div>
					: searchProducts.length
					
					? searchProducts.map(({image, name, subtitle, price, id}) => {
					return (
						<div key={id}>
							<ShopCard 
						id={id}
						image={image} 
						name={name} 
						subtitle={subtitle} 
						price={price} 
						isFetching={isFetching}/>
						</div>
						
					)
				})
				: <NotFound/>
				}
				</div>
		</Layout>
	)
}


export default SearchPage