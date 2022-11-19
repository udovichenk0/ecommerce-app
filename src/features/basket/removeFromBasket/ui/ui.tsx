import { basketModel } from "@/entities/basket"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"

interface IProps {
	id?:string
	setNotification: any
}

export const RemoveFromBasket = ({id, setNotification}: IProps) => {
	const RemoveFromBasket = useAction(basketModel.actions.removeFromBasket)
	const handleOnClick = (id?:string) => {
		setNotification({color: 'warning', message: 'Item removed from basket'})
		RemoveFromBasket(id)
	}
	return (
		<UpdateCart label="Remove from basket" action={() => handleOnClick(id)} style='remove'/>
	)
}