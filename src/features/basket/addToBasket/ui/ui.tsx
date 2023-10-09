import { useSelector } from "react-redux"

import { basketModel } from "@/entities/basket"
import { Basket } from "@/entities/basket/types"
import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"
import { useAction } from "@/shared/lib/redux-std"
import { UpdateCart } from "@/shared/ui/buttons"

import { addToBasketFx } from "../model"
interface IProps {
	product: Basket
}
export const AddToBasket = ({product}: IProps) => {
	const user = useSelector(sessionModel.selectors.profile)
	const basket = useSelector(basketModel.selectors.basket)
	const add = useAction(basketModel.actions.addToBasket)
	const enqueueSnackbar = useAction(notifyModel.actions.enqueueSnackbar)
	
	const addToBasket = useAction(addToBasketFx)
	const handleOnClick = () => {
		//!reword
		add(product)
		addToBasket({basket, userId: user.uid})
		enqueueSnackbar({message: 'Product is added to basket', type: 'success'})
	}
	return (
		<UpdateCart label="Add to basket" action={() => handleOnClick()} style='add'/>
	)
}