import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { Card } from "@/entities/card"

import { Product } from "@/shared/api/product"
import { HeroLayout, Layout } from "@/shared/ui/layouts"

// eslint-disable-next-line import/no-internal-modules
import recommendedGirl from "./assets/recommendedGirl.webp"
import { recommendedPage } from "./recommended.model"
export const RecommendedPage = () => {
  const recommendedProducts = useSelector(
    recommendedPage.$$product.selectors.products,
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
          <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
            {recommendedProducts?.map(
              ({ name, image, subtitle, id }: Product, ind: number) => {
                return (
                  <Card
                    key={ind}
                    name={name}
                    image={image}
                    id={id}
                    subtitle={subtitle}
                  />
                )
              },
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
