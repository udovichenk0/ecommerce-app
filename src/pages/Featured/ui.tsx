import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { ProductList } from "@/entities/products"

import { HeroLayout, Layout } from "@/shared/ui/layouts"

// eslint-disable-next-line import/no-internal-modules
import featuredGuy from "./assets/featuredGuy.webp"
import { featurePage } from "./featured.model"

export const FeaturedPage = () => {
  const products = useSelector(featurePage.$$product.selectors.products)
  const isPending = useSelector(featurePage.$$product.selectors.isLoading)
  return (
    <Layout header={<Header />}>
      <div className="container h-full pb-28">
        <HeroLayout image={featuredGuy}>
          <div className="mb-5 text-[48px] font-light">Featured Products</div>
        </HeroLayout>
        <div className="mt-28 px-10">
          <ProductList products={products} isPending={isPending}/>
        </div>
      </div>
    </Layout>
  )
}
