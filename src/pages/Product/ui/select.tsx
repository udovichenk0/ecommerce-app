import { useRef, useState, useEffect } from "react"

import { ArrowSvg } from "../assets/arrow.svg"

export const MySelector = ({
  options,
  selected,
  setSelected,
}: {
  options: number[]
  selected?: number
  setSelected: (size: number) => void
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isHovered, setIsHovered] = useState(0)
  const [isOpened, setIsOpened] = useState(false)
  const handleOnClickOutside = (e: MouseEvent) => {
    if (!ref.current?.contains(e.target as Node)) {
      setIsOpened(false)
    }
  }
  const onSelect = (option: number) => {
    setSelected(option)
    setIsOpened(false)
  }
  useEffect(() => {
    if (isOpened) {
      document.addEventListener("click", handleOnClickOutside)
    }
    return () => {
      setIsHovered(0)
      return document.removeEventListener("click", handleOnClickOutside)
    }
  }, [isOpened])
  return (
    <div ref={ref} className="relative">
      <button
        className="group flex h-10 w-full items-center justify-between rounded-[5px] border border-[#cccccc] px-2 text-start"
        onClick={() => setIsOpened(!isOpened)}
      >
        {selected} mm
        <div className="flex items-center border-l border-[#ccc] p-[5px]">
          <ArrowSvg />
        </div>
      </button>
      {isOpened && (
        <div className="absolute top-12 flex w-full flex-col rounded-[5px] border border-[#ccc] bg-white">
          {options.map((option, id) => {
            return (
              <button
                className={`p-2 text-start ${
                  isHovered === id ? "bg-[#deebff]" : ""
                }`}
                onMouseOver={() => setIsHovered(id)}
                onClick={() => onSelect(option)}
                key={id}
              >
                {option} mm
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
