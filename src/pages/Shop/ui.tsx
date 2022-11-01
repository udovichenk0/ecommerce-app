import { productModel } from "@/entities/products"
import { useAction } from "@/shared/lib/redux-std"
import { Layout } from "@/shared/ui/layout"
import { useEffect } from "react"

export const ShopPage = () => {
	const fetchStart = useAction(productModel.actions.startFetching)
	return (
		<Layout>
			<div>
				<button onClick={() => fetchStart(2)}>start</button>
			</div>
		</Layout>
	)
}


export default ShopPage