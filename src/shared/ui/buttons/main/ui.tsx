import { cva, VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode } from "react"

const button = cva(["duration-200", "transition-all", "font-bold"], {
  variants: {
    intent: {
      primary: [
        "text-white",
        "bg-main-dark",
        "border-black",
        "hover:bg-main-dark",
      ],
      outline: [
        "text-light-dark",
        "bg-white",
        "border-[1px]",
        "border-[#e1e1e1]",
        "hover:bg-[#e1e1e1]",
        "ease",
      ],
    },
    size: {
      sm: ["py-3", "px-4"],
      md: ["py-4", "px-5"],
      lg: ["py-4", "px-8", "text-lg"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "sm",
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: ReactNode
}
export const Button = ({ ...props }: ButtonProps) => {
  const { children, intent, className, size } = props
  return (
    <button {...props} className={button({ intent, size, className })}>
      {children}
    </button>
  )
}
