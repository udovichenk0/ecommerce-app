import { useNavigate } from "react-router-dom"

import { Button } from "../buttons/main"

interface IProps {
  setModelOpen: (prop: boolean) => void
}
export const CheckOutModal = ({ setModelOpen }: IProps) => {
  const navigate = useNavigate()
  return (
    <div id="modal" className="bg-white shadow-[rgb(0,0,0,0.1)_0px_5px_10px]">
      <div className="px-5 py-[50px]">
        <h2 className="mb-8 text-center text-lg font-bold text-light-dark">
          You must sign in to continue checking out
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setModelOpen(false)}
            className="border-2 border-[#e1e1e1] px-[20px] py-[15px] text-base font-bold text-light-dark"
          >
            Continue shopping
          </button>
          <Button size={"md"} onClick={() => navigate("/auth/signin")}>
            Sign in to checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
