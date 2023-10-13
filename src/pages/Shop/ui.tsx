import { useSelector } from "react-redux"

import { Header } from "@/widgets/header"

import { ShopProductList } from "@/entities/products"

import { useAction } from "@/shared/lib/redux-std"
import { Button } from "@/shared/ui/buttons/main"
import { Layout } from "@/shared/ui/layouts"

import { shopPage } from "./shop.model"

export const ShopPage = () => {
  const getNextProducts = useAction(shopPage.getNextProductFx)
  const products = useSelector(shopPage.$$products.selectors.products)
  const lastRefKey = useSelector(shopPage.$$products.selectors.products)
  const isLoading = useSelector(shopPage.$$products.selectors.isLoading)
  return (
    <Layout header={<Header />}>
      <div className="container relative">
        <div className="mb-16">
          <div className="grid w-full grid-cols-auto-fit justify-center gap-5">
            <ShopProductList isPending={isLoading} products={products}/>
          </div>
        </div>
        <div className="flex w-full justify-center pb-28">
          {lastRefKey && (
            <Button size={"md"} onClick={getNextProducts}>
              Show more items
            </Button>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default ShopPage
