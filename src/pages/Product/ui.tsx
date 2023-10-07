import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { basketModel } from "@/entities/basket"
import { Card } from "@/entities/card"
import { AddToBasket, RemoveFromBasket } from "@/features/basket"
import { correctPrice } from "@/shared/lib/correctPrice"
import { isItemInBasket } from "@/shared/lib/is-item-in-basket"
import { useAppSelector } from "@/shared/lib/redux-std"
import { BackButton, ColorPicker } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layouts"
import { Panel } from "@/shared/ui/panel"
import { Selector } from "@/shared/ui/selector"
import { Header } from "@/widgets/header"

import { productPage } from "./product.model"

const Product = () => {
	const {id} = useParams()
	const ref = useRef<HTMLInputElement>(null)
	const basket = useAppSelector(basketModel.selectors.basket)
	const [selectedImage, setSelectedImage] = useState<string>()
	const [selectedColor, setSelectedColor] = useState<string>()
	const [selectedSize, setSelectedSize] = useState<number>()
	const product = useSelector(productPage.$$singleProduct.selectors.product)
	const recommendedProducts = useSelector(productPage.$$recommendedProducts.selectors.products)
	useEffect(() => {
		setSelectedImage(product?.image)
	}, [product])
	function onSelectColor(color: string){
		setSelectedColor(color)
		if(ref.current){
			ref.current.value = color
		}
	}
	return (
		<Layout header={<Header/>}>
			<div className="container" >
					<div className="mb-5">
						<BackButton/>
					</div>
					<div className="w-full flex justify-center">
						<div className="w-full xl:w-[80%] lg:h-[575px] lg:flex grid-rows-3">
							<div className="p-2 bg-white w-full lg:w-[250px] h-[130px] lg:h-full border-[1px] flex lg:block border-[#e1e1e1] ">
								{product?.imageCollection?.map((image: string, ind:number) => {
									return (
										<button key={ind}
										onClick={() => setSelectedImage(image)}
										className='border-[1px] border-[#e1e1e1]'>
											<img className="w-auto lg:w-full h-full lg:h-auto" src={image} alt={product?.name} />
										</button>
									)
								})}
							</div>
							<div className="lg:h-full h-auto w-full flex justify-center items-center relative max-lg:border-x-[1px] lg:border-y-[1px] border-[#e1e1e1]">
								<input disabled type="color" ref={ref} className={`w-full h-full absolute top-0 left-0 mix-blend-hue ${selectedColor? 'opacity-100' : 'opacity-0'}`} />
								<img className="w-[60%] lg:w-full h-auto" src={selectedImage}  alt={product?.name} />
							</div>
							<div className="w-full bg-white border-[1px] border-[#e1e1e1]">
								<div className='p-8'>
									<div className="w-full border-b-[1px] border-[#e1e1e1] pb-4 mb-6">
										<p className="text-[#818181] text-sm">{product?.subtitle}</p>
										<h1 className="font-bold text-main-dark text-2xl mb-3">{product?.name}</h1>
										<p className="text-sm text-[#4a4a4a]">{product?.description}</p>
									</div>
									<p className="text-[#818181] font-bold text-base mb-3">Lens Width and Frame Size</p>
									<div className="mb-6">
										<Selector setSelectedSize={setSelectedSize} sizes={product?.sizes}/>
									</div>
									<p className="text-[#818181] font-bold text-base mb-3">Choose Color</p>
									<div className="flex gap-x-3 mb-6">
										<ColorPicker colors={product?.colors} onSelectColor={onSelectColor}/>
									</div>
									<h1 className="font-medium text-[35px] mb-3">{correctPrice(product?.price)}</h1>
										{isItemInBasket(basket, id) 
										? <RemoveFromBasket id={id}/>
										: <AddToBasket
										product={{...product, selectedSize: selectedSize || product?.sizes?.[0], quantity: 1, selectedColor: selectedColor || product?.colors?.[0]}}/>
										}
								</div>
							</div>
						</div>
					</div>
					<div className="px-10 mt-28">
					<Panel title={'Recommended Products'} link={'/recommended'}/>
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							recommendedProducts?.map(({name, image, subtitle, id}:any, ind: number) => {
								return (
									<Card key={ind} name={name} image={image} id={id} subtitle={subtitle}/>
								)
							})
						}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Product