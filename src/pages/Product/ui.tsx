import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { Header } from "@/widgets/header"

import { addToBasketFx, removeFromBasketFx } from "@/features/basket"

import { basketModel } from "@/entities/basket"
import { ProductList } from "@/entities/products"

import { correctPrice } from "@/shared/lib/correctPrice"
import { isItemInBasket } from "@/shared/lib/is-item-in-basket"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { ColorPicker } from "@/shared/ui/buttons"
import { Button } from "@/shared/ui/buttons/main"
import { Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"
import { Selector } from "@/shared/ui/selector"

import { productPage } from "./product.model"

const Product = () => {
  const { id } = useParams()
  const ref = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const [selectedImage, setSelectedImage] = useState<string>()
  const [selectedColor, setSelectedColor] = useState<string>()
  const [selectedSize, setSelectedSize] = useState<number>()

  const basket = useAppSelector(basketModel.selectors.basket)
  const product = useSelector(productPage.$$singleProduct.selectors.product)
  const recommendedProducts = useSelector(
    productPage.$$recommendedProducts.selectors.products,
  )
  const isRecommendedPending = useSelector(
    productPage.$$recommendedProducts.selectors.isLoading,
  )

  const addItemToBasket = useAction(addToBasketFx)
  const removeItemFromBasket = useAction(removeFromBasketFx)

  useEffect(() => {
    setSelectedImage(product?.image)
  }, [product])
  function onSelectColor(color: string) {
    setSelectedColor(color)
    if (ref.current) {
      ref.current.value = color
    }
  }
  return (
    <Layout header={<Header />}>
      <div className="container">
        <Button 
          className="mb-5"
          onClick={() => navigate(-1)} 
          size={'lg'}>
          Back
        </Button>
        <div className="flex w-full justify-center">
          <div className="w-full grid-rows-3 lg:flex lg:h-[575px] xl:w-[80%]">
            <div className="flex h-[130px] w-full border-[1px] border-[#e1e1e1] bg-white p-2 lg:block lg:h-full lg:w-[250px] ">
              {product?.imageCollection?.map((image: string, ind: number) => {
                return (
                  <button
                    key={ind}
                    onClick={() => setSelectedImage(image)}
                    className="border-[1px] border-[#e1e1e1]"
                  >
                    <img
                      className="h-full w-auto lg:h-auto lg:w-full"
                      src={image}
                      alt={product?.name}
                    />
                  </button>
                )
              })}
            </div>
            <div className="relative flex h-auto w-full items-center justify-center border-[#e1e1e1] max-lg:border-x-[1px] lg:h-full lg:border-y-[1px]">
              <input
                disabled
                type="color"
                ref={ref}
                className={`absolute top-0 left-0 h-full w-full mix-blend-hue ${
                  selectedColor ? "opacity-100" : "opacity-0"
                }`}
              />
              <img
                className="h-auto w-[60%] lg:w-full"
                src={selectedImage}
                alt={product?.name}
              />
            </div>
            <div className="w-full border-[1px] border-[#e1e1e1] bg-white">
              <div className="p-8">
                <div className="mb-6 w-full border-b-[1px] border-[#e1e1e1] pb-4">
                  <p className="text-sm text-[#818181]">{product?.subtitle}</p>
                  <h1 className="mb-3 text-2xl font-bold text-main-dark">
                    {product?.name}
                  </h1>
                  <p className="text-sm text-[#4a4a4a]">
                    {product?.description}
                  </p>
                </div>
                <p className="mb-3 text-base font-bold text-[#818181]">
                  Lens Width and Frame Size
                </p>
                <div className="mb-6">
                  <Selector
                    setSelectedSize={setSelectedSize}
                    sizes={product?.sizes}
                  />
                </div>
                <p className="mb-3 text-base font-bold text-[#818181]">
                  Choose Color
                </p>
                <div className="mb-6 flex gap-x-3">
                  <ColorPicker
                    colors={product?.colors}
                    onSelectColor={onSelectColor}
                  />
                </div>
                <h1 className="mb-3 text-[35px] font-medium">
                  {correctPrice(product?.price)}
                </h1>
                {isItemInBasket(basket, id!) ? (
                  <Button
                    intent={"outline"}
                    onClick={() => removeItemFromBasket({ productId: id! })}
                  >
                    Remove from basket
                  </Button>
                ) : (
                  <Button
                    intent={"primary"}
                    onClick={() =>
                      addItemToBasket({
                        product: {
                          ...product,
                          selectedSize: selectedSize || product?.sizes?.[0],
                          quantity: 1,
                          selectedColor: selectedColor || product?.colors?.[0],
                        },
                      })
                    }
                  >
                    Add to basket
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 px-10">
          <Panel title={"Recommended Products"} link={"/recommended"} />
          <ProductList products={recommendedProducts} isPending={isRecommendedPending}/>
        </div>
      </div>
    </Layout>
  )
}

export default Product
