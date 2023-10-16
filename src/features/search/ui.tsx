import { Controller, useForm } from "react-hook-form"

import { useAction } from "@/shared/lib/redux-std"

import { SearchSvg } from "./assets/searchSvg"
import { searchProductsFx } from "./model"

export const SearchProduct = () => {
  const search = useAction(searchProductsFx)
  const { handleSubmit, control } = useForm<{ search: string }>({
    defaultValues: {
      search: "",
    },
  })
  function onclick(data: { search: string }) {
    if (data.search) {
      search(data.search)
    }
  }
  return (
    <form className="relative w-full" onSubmit={handleSubmit(onclick)}>
      <button className="absolute left-0 flex h-[47px] w-[47px] items-center justify-center">
        <SearchSvg />
      </button>
      <Controller
        control={control}
        name={"search"}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <input
            placeholder="Search product..."
            className="w-full border-[1px] border-[#e1e1e1] px-16 py-2 text-xl outline-none"
            type="text"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        )}
      />
    </form>
  )
}
