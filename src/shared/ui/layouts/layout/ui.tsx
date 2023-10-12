import { Footer } from "../../footer"

type PropsType = {
  children: JSX.Element | JSX.Element[]
  header: JSX.Element
}
export const Layout = ({ children, header }: PropsType) => {
  return (
    <div className="grid h-screen grid-cols-[100%] grid-rows-[auto,1fr,auto]">
      {header}
      <div className="container h-full w-full justify-center pb-28">
        {children}
      </div>
      <Footer />
    </div>
  )
}
