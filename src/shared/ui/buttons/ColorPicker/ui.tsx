export const ColorPicker = ({ colors, onSelectColor }: any) => {
  return colors?.map((color: any, ind: number) => {
    return (
      <button
        key={ind}
        style={{ backgroundColor: color }}
        className={`h-[30px] w-[30px] rounded-full`}
        onClick={() => onSelectColor(color)}
      ></button>
    )
  })
}
