import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { Header } from "@/widgets/header"

import { ProductList } from "@/entities/products"

import { mainVariant } from "@/shared/ui/buttons/main"
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"
import { routes } from "@/shared/config/routes"

import woman from "./assets/woman.png"
import { homePage } from "./home.model"

export const Home = () => {
  const recommendedProducts = useSelector(
    homePage.$$recommendedProducts.selectors.products,
  )
  const featuredProducts = useSelector(
    homePage.$$featuredProducts.selectors.products,
  )
  const isRecommendedPending = useSelector(
    homePage.$$recommendedProducts.selectors.isLoading,
  )
  const isFeaturedPending = useSelector(
    homePage.$$featuredProducts.selectors.isLoading,
  )
  return (
    <Layout header={<Header />}>
      <HeroLayout image={woman}>
        <div className="mb-6 text-[37px] font-light leading-[0px] lg:text-[48px]">
          <span className="font-medium leading-[0px]">See</span> everything
        </div>
        <div className="mb-5 text-[37px] font-light lg:text-[48px]">
          with <span className="font-medium">Clarity</span>{" "}
        </div>
        <p className="mb-10 text-base font-semibold text-light-dark">
          Buying eyewear should leave you happy and good-looking, with money in
          your pocket. Glasses, sunglasses, and contacts—we have got your eyes
          covered.
        </p>
        <Link to={routes.shop} className={mainVariant({size: 'md'})}>Shop Now</Link>
      </HeroLayout>
      <div className="mt-28 px-10">
        <Panel title={"Featured Products"} link={"featured"} />
        <ProductList
          isPending={isFeaturedPending}
          products={featuredProducts}
        />
      </div>
      <div className="mt-28 px-10">
        <Panel title={"Recommended Products"} link={"recommended"} />
        <ProductList
          isPending={isRecommendedPending}
          products={recommendedProducts}
        />
      </div>
    </Layout>
  )
}
