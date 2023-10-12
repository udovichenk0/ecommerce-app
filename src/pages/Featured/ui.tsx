import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { Card } from "@/entities/card"

import { Product } from "@/shared/api/product"
import { HeroLayout, Layout } from "@/shared/ui/layouts"

// eslint-disable-next-line import/no-internal-modules
import featuredGuy from "./assets/featuredGuy.webp"
import { featurePage } from "./featured.model"

export const FeaturedPage = () => {
  const products = useSelector(featurePage.$$product.selectors.products)
  return (
    <Layout header={<Header />}>
      <div className="container h-full pb-28">
        <HeroLayout image={featuredGuy}>
          <div className="mb-5 text-[48px] font-light">Featured Products</div>
        </HeroLayout>
        <div className="mt-28 px-10">
          <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
            {products?.map(({ name, image, subtitle, id }: Product) => {
              return (
                <Card
                  key={id}
                  name={name}
                  image={image}
                  id={id}
                  subtitle={subtitle}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}
