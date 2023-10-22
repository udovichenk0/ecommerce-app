import { VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes, ReactNode, RefAttributes } from "react"
import { Link, LinkProps as ReactRouterLinkProps } from "react-router-dom"

import { mainVariant } from "./variant"

type BaseProps = VariantProps<typeof mainVariant> & {
  children: ReactNode
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps & {
    as?: "button"
  }
type LinkProps = ReactRouterLinkProps &
  RefAttributes<HTMLAnchorElement> &
  BaseProps & {
    as: "link"
  }

type ButtonOrLinkProps = LinkProps | ButtonProps

export const Button = ({ ...props }: ButtonOrLinkProps) => {
  const { children, intent, className, size } = props
  if (props.as === "link") {
    return (
      <Link {...props} className={mainVariant({ intent, size, className })}>
        {children}
      </Link>
    )
  }
  return (
    <button {...props} className={mainVariant({ intent, size, className })}>
      {children}
    </button>
  )
}
