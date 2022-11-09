import { basketModel } from "@/entities/basket"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"

export const RemoveFromBasket = ({id}: {id?:string}) => {
	const RemoveFromBasket = useAction(basketModel.actions.removeFromBasket)
	return (
		<UpdateCart label="Remove from basket" action={() => RemoveFromBasket(id)} style='remove'/>
	)
}