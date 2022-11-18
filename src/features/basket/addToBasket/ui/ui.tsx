import { basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"

export const AddToBasket = ({product}: {product: BasketType}) => {
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	return (
		<UpdateCart label="Add to basket" action={() => AddToBasket(product)} style='add'/>
	)
}