export const SearchInput = ({ onChange, onBlur, value, inputRef }: any) => {
  return (
    <input
      placeholder="Search product..."
      className="w-full border-[1px] border-[#e1e1e1] py-2 px-16 text-xl outline-none"
      type="text"
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      ref={inputRef}
    />
  )
}
