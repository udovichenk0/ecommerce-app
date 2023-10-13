// import { Loader } from "@/shared/ui/spinner"

import SearchPage from "./ui"

export const Template = ({ isFetching }: any) => {
  if (isFetching)
    return (
      <div className="h-full items-center justify-center">
        {/* <Loader /> */}
      </div>
    )
  return <SearchPage />
}
