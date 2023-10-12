import { ReactNode } from "react"

interface IProps {
  children: ReactNode
  image: string
}
export const HeroLayout = ({ children, image }: IProps) => {
  return (
    <div>
      <section className=" flex h-[400px] items-center justify-between bg-[#f3f3f3]">
        <div className="p-8 md:basis-1/2">{children}</div>
        <div className="hidden h-full w-full basis-1/2 bg-cover md:block">
          <img
            src={image}
            className="h-full w-full bg-contain object-cover"
            alt=""
          />
        </div>
      </section>
    </div>
  )
}
