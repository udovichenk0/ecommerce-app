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
	const snackbars = useAppSelector(notifyModel.selectors.notifications)
	const enqueueSnackbar = useAction(notifyModel.actions.enqueueSnackbar)
	
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	const handleOnClick = () => {
		setNotification({color: 'success', message: 'Item added to basket'})
		enqueueSnackbar({message: 'this is a snackbar'})
		AddToBasket(product)
	}
	return (
		<UpdateCart label="Add to basket" action={() => handleOnClick()} style='add'/>
	)
}