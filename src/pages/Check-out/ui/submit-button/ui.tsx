export const SubmitButton = ({
  label,
  action,
}: {
  label: string
  action: any
}) => {
  return (
    <button
      onSubmit={action}
      className={`border-2 border-[#101010] bg-[#101010] py-[8px] px-[13px] text-base font-bold text-white`}
    >
      {label}
    </button>
  )
}
