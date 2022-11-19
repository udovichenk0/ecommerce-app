import { basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"
interface IProps {
	product: BasketType
	setNotification: any
}
export const AddToBasket = ({product, setNotification}: IProps) => {
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	const handleOnClick = () => {
		setNotification({color: 'success', message: 'Item added to basket'})
		AddToBasket(product)
	}
	return (
		<UpdateCart label="Add to basket" action={() => handleOnClick()} style='add'/>
	)
}