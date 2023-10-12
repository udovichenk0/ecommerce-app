interface IProps {
  label: string
  action: () => void
  style: string
}
export const UpdateCart = ({ label, action, style }: IProps) => {
  return (
    <button
      className={`py-3 px-4 font-bold
		${
      style == "add"
        ? "ease border-[1px] border-black bg-black text-white transition-all duration-200 hover:bg-main-dark"
        : "ease border-[1px] border-[#e1e1e1] bg-white text-light-dark transition-all duration-200 hover:bg-[#e1e1e1]"
    }`}
      onClick={action}
    >
      {label}
    </button>
  )
}
