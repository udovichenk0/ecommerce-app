import { WritingSvg } from "./icon"

export const FileChooser = ({ register, name }: any) => {
  return (
    <label
      htmlFor={name}
      className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full bg-black"
    >
      <WritingSvg />
      <input
        id={name}
        {...register(name)}
        className="hidden h-[30px] w-[30px]"
        type="file"
      />
    </label>
  )
}
