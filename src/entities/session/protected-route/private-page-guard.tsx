import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import { routes } from "@/shared/config/routes"

import { selectors } from "../session.model"

export const PrivatePageGuard = ({ children }: PropsWithChildren) => {
  const session = useSelector(selectors.profile)
  const isLoaded = useSelector(selectors.isLoaded)
  if (isLoaded) {
    if (session.uid) {
      return <>{children}</>
    }
    return <Navigate to={routes.signin} />
  }
  return null
}
