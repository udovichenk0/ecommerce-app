import { useNavigate, Navigate } from "react-router-dom";

import { basketModel } from "@/entities/basket";
import { useAppSelector } from "@/shared/lib/redux-std";

export const ProductRequire = ({children}:any) => {
const product = useAppSelector(basketModel.selectors.basket)
const navigate = useNavigate()
if(!product.length){
	return <Navigate to={'/'}/>
}
return children
}