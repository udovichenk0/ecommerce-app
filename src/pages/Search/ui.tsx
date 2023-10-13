import { Header } from "@/widgets/header"

// import { searchModel } from "@/features/search"

// import { ShopCard } from "@/entities/products"

// import { useAppSelector } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layouts"
// import { Loader } from "@/shared/ui/spinner"
// 
// import { NotFound } from "./notFound"
const SearchPage = () => {
  // const searchProducts = useAppSelector(searchModel.selectors.searchedProducts)
  // const isFetching = useAppSelector(searchModel.selectors.isSearchedFetching)
  return (
    <Layout header={<Header />}>
      <div className="container grid grid-cols-auto-fit justify-center gap-5">
        {/* {isFetching ? (
          <div className="flex h-full items-center justify-center">
            <Loader />
          </div>
        ) : searchProducts.length ? (
          searchProducts.map(({ image, name, subtitle, price, id }) => {
            return (
              <div key={id}>
                <ShopCard
                  id={id}
                  image={image}
                  name={name}
                  subtitle={subtitle}
                  price={price}
                  isFetching={isFetching}
                />
              </div>
            )
          })
        ) : (
          <NotFound />
        )} */}
      </div>
    </Layout>
  )
}

export default SearchPage
