import { PropsWithChildren } from "react"

import { searchModel } from "@/features/search"
import { useAppSelector } from "@/shared/lib/redux-std"
import { Loader } from "@/shared/ui/spinner"

import SearchPage from "./ui"

export const Template = ({children, isFetching}:any) => {
	if(isFetching) return <div className="h-full items-center justify-center"><Loader/></div>
	return <SearchPage/>
}