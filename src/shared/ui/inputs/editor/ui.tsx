import { PropsType } from "./type"

export const InputEditor = ({
  register,
  label,
  placeholder,
  name,
  disabled,
  errors,
}: PropsType) => {
  return (
    <div className="w-full">
      {errors?.[name] ? (
        <p className="px-3 font-medium text-error">{errors?.[name]?.message}</p>
      ) : (
        <label className="px-3" htmlFor="editor">
          {label}
        </label>
      )}
      <input
        disabled={disabled}
        placeholder={placeholder}
        className={`mt-2 w-full border-[1px] border-[#c5c5c5] bg-[#f9f9f9] px-6 py-[5px] text-[22px] font-medium outline-none ${
          disabled && "text-[#696868]"
        }`}
        {...register(name)}
        id="editor"
        type="text"
      />
    </div>
  )
}
