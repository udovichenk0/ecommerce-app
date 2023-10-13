import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { ProductList } from "@/entities/products"

import { HeroLayout, Layout } from "@/shared/ui/layouts"

// eslint-disable-next-line import/no-internal-modules
import recommendedGirl from "./assets/recommendedGirl.webp"
import { recommendedPage } from "./recommended.model"
export const RecommendedPage = () => {
  const recommendedProducts = useSelector(
    recommendedPage.$$product.selectors.products,
  )
  const isRecommendedPending = useSelector(
    recommendedPage.$$product.selectors.isLoading,
  )
  return (
    <Layout header={<Header />}>
      <div className="container h-full pb-28">
        <HeroLayout image={recommendedGirl}>
          <div className="mb-5 text-[48px] font-light">
            Recommended Products
          </div>
        </HeroLayout>
        <div className="mt-28 px-10">
          <ProductList
            isPending={isRecommendedPending}
            products={recommendedProducts}
          />
        </div>
      </div>
    </Layout>
  )
}
