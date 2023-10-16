import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { searchModel } from "@/features/search"

import { ShopProductList } from "@/entities/products"

import { Layout } from "@/shared/ui/layouts"

import { NotFound } from "./not-found"
const SearchPage = () => {
  const products = useSelector(searchModel.selectors.searchedProducts)
  const isFetching = useSelector(searchModel.selectors.isLoading)
  return (
    <Layout header={<Header />}>
      {!isFetching && !products.length ? (
        <NotFound />
      ) : (
        <ShopProductList isPending={isFetching} products={products} />
      )}
    </Layout>
  )
}

export default SearchPage
