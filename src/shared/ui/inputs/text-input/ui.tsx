type propsType = {
  onChange: any
  value: any
  inputRef: any
  error: any
  label: string
  name: string
  placeholder: any
  onBlur: any
}
export const TextInput = ({
  onChange,
  value,
  inputRef,
  error,
  label,
  name,
  placeholder,
  onBlur,
}: propsType) => {
  return (
    <div className="flex flex-col">
      {error ? (
        <label
          className="px-3 py-[10px] text-sm font-bold text-error "
          htmlFor={name}
        >
          {error.message}
        </label>
      ) : (
        <label
          className="px-3 py-[10px] text-sm font-bold text-[#696868] "
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className={`border-[1px] bg-[#f9f9f9] px-4 py-[10px] font-bold outline-none ${
          error ? "border-error" : "border-[#c5c5c5]"
        }`}
        type="text"
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
      />
    </div>
  )
}
