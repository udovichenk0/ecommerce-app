import { PropsWithChildren, useEffect } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

import { selectors } from "../session"

export const SignedInPageGuard = ({children}: PropsWithChildren) => {
  const session = useSelector(selectors.profile)
  const isLoaded = useSelector(selectors.isLoaded)
  if(isLoaded){
    if(session.uid){
      return <Navigate to={'/account'}/>
    }
    return <>{children}</>
  }
  console.log("here")
  return null
}