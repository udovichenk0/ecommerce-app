import { createAsyncThunk } from "@reduxjs/toolkit"

import { searchModel } from "@/features/search"

export const getSearchedProductsFx = createAsyncThunk(
  "pages/searched-products",
  async (name: string, { dispatch, getState }) => {
    const isLoading = searchModel.selectors.isLoading(getState() as any)
    if (isLoading) return
    try {
      dispatch(searchModel.searchProductsFx(name))
    } catch (error) {
      console.log(error)
    }
  },
)

export const searchPage = {
  getSearchedProductsFx,
}
