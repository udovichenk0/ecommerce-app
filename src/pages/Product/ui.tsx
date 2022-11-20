import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"


import { basketModel } from "@/entities/basket"
import { Card } from "@/entities/card"
import { AddToBasket, RemoveFromBasket } from "@/features/basket"
import { correctPrice } from "@/shared/lib/correctPrice"
import { isItemInBasket } from "@/shared/lib/isItemInBasket"
import { useAppSelector } from "@/shared/lib/redux-std"
import { ProductType } from "@/shared/lib/types"
import { useGetRecommendedProducts } from "@/shared/lib/useGetRecommended"
import { useGetSingleProduct } from "@/shared/lib/useGetSingleProduct"
import { BackButton, ColorPicker } from "@/shared/ui/buttons"
import { Layout } from "@/shared/ui/layout"
import { Notification } from "@/shared/ui/notifications"
import { Panel } from "@/shared/ui/panel"
import { Selector } from "@/shared/ui/selector"
import { Header } from "@/widgets/header"

const Product = () => {
	const {id} = useParams()
	const ref = useRef<any>(null)
	const {product}:{product: ProductType} =  useGetSingleProduct(id)
	const basket = useAppSelector(basketModel.selectors.basket)
	const [selectedImage, setSelectedImage] = useState<string>()
	const [selectedColor, setSelectedColor] = useState<string>()
	const [selectedSize, setSelectedSize] = useState<number>()
	const {getRecommended, recommended, isRecommendLoading} = useGetRecommendedProducts()

	const [notifications, setNotifications] = useState<any>(false);
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
		<Layout header={<Header/>}>
			{notifications.color && 
			<Notification onDelete={setNotifications} color={notifications.color} message={notifications.message}/>
			}
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
											<img className="w-full h-auto" src={image} alt={product?.name} />
										</button>
									)
								})}	
							</div>
							<div className="h-full flex items-center w-[382px] relative">
								<input disabled type="color" ref={ref} className={`w-full h-full absolute top-0 left-0 mix-blend-hue ${selectedColor? 'opacity-100' : 'opacity-0'}`} />
								<img className="w-full h-auto" src={selectedImage}  alt={product?.name} />
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
									<h1 className="font-medium text-[35px] mb-5">{correctPrice(product?.price)}</h1>
									{isItemInBasket(basket, id) 
									? <RemoveFromBasket setNotification={setNotifications} id={id}/>
									: <AddToBasket setNotification={setNotifications}
									product={{...product, selectedSize: selectedSize || product?.sizes[0],quantity: 1, selectedColor: selectedColor || product?.colors[0]}}/>
									}
								</div>
							</div>
						</div>
					</div>
					<div className="px-10 mt-28">
					<Panel title={'Recommended Products'} link={'/recommended'}/>
					<div className="grid grid-cols-auto-fit gap-5 justify-center items-center">
						{
							recommended?.map(({name, image, subtitle, id}:any, ind: number) => {
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