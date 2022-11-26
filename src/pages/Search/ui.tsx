import { ShopCard } from "@/entities/card/shop-card"
import { searchModel } from "@/features/search"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"
import { Header } from "@/widgets/header"
const SearchPage = () => {
	const searchProducts = useAppSelector(searchModel.selectors.searchedProducts)
	const isFetching = useAppSelector(searchModel.selectors.isSearchedFetching)
	return (
		<Layout header={<Header/>}>
			<div className="container grid grid-cols-auto-fit gap-5 justify-center">
				{searchProducts.map(({image, name, subtitle, price}, id) => {
				return (
					<div key={id}>
						<ShopCard 
					image={image} 
					name={name} 
					subtitle={subtitle} 
					price={price} 
					isFetching={isFetching}/>
					</div>
					
				)
			})}
			
			</div>
		</Layout>
	)
}


export default SearchPage