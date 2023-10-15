import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import { routes } from "@/shared/config/routes"

import { selectors } from "../session.model"

export const SignedInPageGuard = ({ children }: PropsWithChildren) => {
  const session = useSelector(selectors.profile)
  const isLoaded = useSelector(selectors.isLoaded)
  if (isLoaded) {
    if (session.uid) {
      return <Navigate to={routes.account} />
    }
    return <>{children}</>
  }
  console.log("here")
  return null
}
