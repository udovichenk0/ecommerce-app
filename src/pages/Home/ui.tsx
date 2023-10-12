import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { Header } from "@/widgets/header"

import { Card } from "@/entities/card"

import { Button } from "@/shared/ui/buttons/main"
import { HeroLayout, Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"

// eslint-disable-next-line import/no-internal-modules
import woman from "./assets/woman.png"
import { homePage } from "./home.model"

export const Home = () => {
  const recommendedProducts = useSelector(
    homePage.$$recommendedProducts.selectors.products,
  )
  const featuredProducts = useSelector(
    homePage.$$featuredProducts.selectors.products,
  )
  const navigate = useNavigate()
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
        <Button onClick={() => navigate("shop")} size={"md"}>
          Shop Now
        </Button>
      </HeroLayout>
      <div className="mt-28 px-10">
        <Panel title={"Featured Products"} link={"featured"} />
        <div className="grid grid-cols-auto-fit items-center justify-center gap-5">
          {featuredProducts?.map(
            ({ name, image, subtitle, id }: any, ind: number) => {
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
      <div className="mt-28 px-10">
        <Panel title={"Recommended Products"} link={"recommended"} />
        <div className="grid grid-cols-auto-fit gap-5">
          {recommendedProducts?.map(
            ({ name, image, subtitle, id }: any, ind: number) => {
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
    </Layout>
  )
}
