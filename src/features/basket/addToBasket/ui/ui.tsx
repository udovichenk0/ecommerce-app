import { basketModel } from "@/entities/basket"
import { useAction } from "@/shared/lib/redux-std"
import { ProductType } from "@/shared/lib/types"
import { UpdateCart } from "@/shared/ui/buttons"

export const AddToBasket = ({product}: {product: ProductType}) => {
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	return (
		<UpdateCart label="Add to basket" action={() => AddToBasket(product)} style='add'/>
	)
}