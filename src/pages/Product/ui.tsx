/* eslint-disable no-unused-vars */
import React,{ useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { correctPrice } from "@/shared/lib/correctPrice"
import { useGetRecommendedProducts } from "@/shared/lib/useGetRecommended"
import { useGetSingleProduct } from "@/shared/lib/useGetSingleProduct"
import { BackButton } from "@/shared/ui/buttons/backBtn"
import { ColorPicker } from "@/shared/ui/buttons/ColorPicker"
import { Layout } from "@/shared/ui/layout"
import { Selector } from "@/shared/ui/selector/ui"
import { Grid } from "@/widgets/grid"
const Product = () => {
	const {id} = useParams()
	const ref = useRef<any>(null)
	const {product} =  useGetSingleProduct(id)
	const [selectedImage, setSelectedImage] = useState<string>()
	const [selectedColor, setSelectedColor] = useState<string>()
	const [selectedSize, setSelectedSize] = useState<number>()
	const {getRecommended, recommended, isRecommendLoading} = useGetRecommendedProducts()
	useEffect(() => {
		getRecommended()
	}, [])
	useEffect(() => {
		setSelectedImage(product?.image)
	}, [product])
	
	function onSelectColor(color: string){
		setSelectedColor(color)
		ref.current.value = color
	}
	return (
		<Layout>
			<div className="container pb-20" >
				<div className="mb-10 px-20">
						<BackButton/>
					</div>
					<div className="w-full flex justify-center">
						<div className="w-[1053px]  h-[575px] border-[1px] border-[#e1e1e1] flex">
							<div className="p-2 bg-white w-[200px] h-full border-r-[1px] border-[#e1e1e1]">
								{product?.imageCollection.map((image: string, ind:number) => {
									return (
										<button key={ind}
										onClick={() => setSelectedImage(image)}
										className='border-[1px] border-[#e1e1e1]'>
											<img src={image} alt={product?.name} />
										</button>
									)
								})}	
							</div>
							<div className="h-full flex items-center w-auto relative">
								<input disabled type="color" ref={ref} className="w-full h-full absolute top-0 left-0 mix-blend-hue " />
								<img src={selectedImage}  alt="" />
							</div>
							<div className="w-[500px] h-full bg-white">
								<div className='p-12'>
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
									<h1 className="font-medium text-[35px]">{correctPrice(product?.price)}</h1>
								</div>
							</div>
						</div>
					</div>
					<Grid data={recommended} title={'Recommended Products'} link={'/'}/>
			</div>
		</Layout>
	)
}

export default Product