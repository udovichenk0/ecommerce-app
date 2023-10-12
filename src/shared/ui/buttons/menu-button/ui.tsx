interface IProps {
  action: any
  label: string
  disable?: boolean
}
export const MenuButton = ({ action, label, disable }: IProps) => {
  return (
    <button
      disabled={disable}
      className="border-[1px] border-[#e1e1e1] px-6 py-3 text-[18px] font-medium text-black"
      onClick={action}
    >
      {label}
    </button>
  )
}
