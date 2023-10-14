import { useRef, useState, useEffect } from "react"

import { ArrowSvg } from "../assets/arrow.svg"

export const MySelector = ({options, selected, setSelected}: { options: number[], selected?: number, setSelected: (size: number) => void}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isHovered, setIsHovered] = useState(0)
  const [isOpened, setIsOpened] = useState(false)
  const handleOnClickOutside = (e: MouseEvent) => {
    if(!ref.current?.contains(e.target as Node)){
      setIsOpened(false)
    }
  }
  const onSelect = (option: number) => {
    setSelected(option)
    setIsOpened(false)
  }
  useEffect(() => {
    if(isOpened){
      document.addEventListener('click', handleOnClickOutside)
    }
    return () => {
      setIsHovered(0)
      return document.removeEventListener('click', handleOnClickOutside)
    }
  }, [isOpened])
  return (
    <div ref={ref} className="relative">
      <button className="group h-10 px-2 border flex justify-between items-center border-[#cccccc] w-full text-start rounded-[5px]" onClick={() => setIsOpened(!isOpened)}>
        {selected} mm
        <div className="border-l border-[#ccc] flex items-center p-[5px]">
          <ArrowSvg/>
        </div>
      </button>
      {isOpened && (<div className="absolute bg-white flex flex-col w-full border top-12 rounded-[5px] border-[#ccc]">
        {(options.map((option, id) => {
          return (
            <button 
            className={`text-start p-2 ${isHovered === id ? "bg-[#deebff]" : ""}`}
              onMouseOver={() => setIsHovered(id)} 
              onClick={() => onSelect(option)} key={id}>
              {option} mm
            </button>
          )
        }))}
      </div>
      )}
    </div>
  )
}