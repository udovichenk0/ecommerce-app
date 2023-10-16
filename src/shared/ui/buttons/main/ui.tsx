import { VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode } from "react"

import { mainVariant } from "./variant"

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof mainVariant> {
  children: ReactNode
}
export const Button = ({ ...props }: ButtonProps) => {
  const { children, intent, className, size } = props
  return (
    <button {...props} className={mainVariant({ intent, size, className })}>
      {children}
    </button>
  )
}
