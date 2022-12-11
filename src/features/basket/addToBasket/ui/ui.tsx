import { basketModel } from "@/entities/basket"
import { BasketType } from "@/entities/basket/types"
import { notifyModel } from "@/entities/notification"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"
interface IProps {
	product: BasketType
}
export const AddToBasket = ({product}: IProps) => {
	const enqueueSnackbar = useAction(notifyModel.actions.enqueueSnackbar)
	
	const AddToBasket = useAction(basketModel.actions.addToBasket)
	const handleOnClick = () => {
		AddToBasket(product)
		enqueueSnackbar({message: 'Product is added to basket', type: 'success'})
	}
	return (
		<UpdateCart label="Add to basket" action={() => handleOnClick()} style='add'/>
	)
}