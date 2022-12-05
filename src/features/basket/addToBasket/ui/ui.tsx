import { basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { notifyModel } from "@/entities/notification"
import { useAction, useAppSelector } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"
interface IProps {
	product: BasketType
	setNotification: any
}
export const AddToBasket = ({product, setNotification}: IProps) => {
	const enqueueSnackbar = useAction(notifyModel.actions.enqueueSnackbar)
	
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	const handleOnClick = () => {
		enqueueSnackbar({message: 'Product is added to basket', type: 'success'})
		AddToBasket(product)
	}
	return (
		<UpdateCart label="Add to basket" action={() => handleOnClick()} style='add'/>
	)
}