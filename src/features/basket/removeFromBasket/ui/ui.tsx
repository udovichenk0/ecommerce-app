import { basketModel } from "@/entities/basket"
import { notifyModel } from "@/entities/notification"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"

interface IProps {
	id?:string
}

export const RemoveFromBasket = ({id}: IProps) => {
	const RemoveFromBasket = useAction(basketModel.actions.removeFromBasket)
	const enqueueSnackbar = useAction(notifyModel.actions.enqueueSnackbar)
	const handleOnClick = (id?:string) => {
		enqueueSnackbar({message: 'Product is removed from basket', type: 'warning'})
		RemoveFromBasket(id)
	}
	return (
		<UpdateCart label="Remove from basket" action={() => handleOnClick(id)} style='remove'/>
	)
}