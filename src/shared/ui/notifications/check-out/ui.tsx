
import { PropsWithChildren, useRef } from "react"
import {createPortal} from "react-dom"
import { useNavigate } from "react-router-dom"

import { useClickOutside } from "@/shared/lib/use-click-outside"

import { BaseButton } from "../../buttons"

interface IProps {
	setModelOpen: (prop: any) => void
}
export const CheckOutModal = ({setModelOpen}: IProps) => {
	const ref = useRef(null)
	const navigate = useNavigate()
	return (
		<div id="modal" className="bg-white shadow-[rgb(0,0,0,0.1)_0px_5px_10px]">
			<div className="px-5 py-[50px]">
				<h2 className="text-light-dark font-bold text-lg text-center mb-8">You must sign in to continue checking out</h2>
				<div className="flex items-center gap-2">
					<button onClick={() => setModelOpen(false)}
					className='py-[15px] px-[20px] text-base border-2 border-[#e1e1e1] text-light-dark font-bold'>
						Continue shopping
					</button>
					<BaseButton label="Sign in to checkout" action={() => navigate('/signin')}/>
				</div>
			</div>
		</div>
	)
}
