import { createAsyncThunk } from "@reduxjs/toolkit"

import { BasketProduct, basketModel } from "@/entities/basket"
import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"

import { basketApi } from "@/shared/api/basket"

export const addToBasketFx = createAsyncThunk(
  "feature/basket/addToBasket",
  async ({ product }: { product: BasketProduct }, { dispatch, getState }) => {
    const state = getState() as Record<string, unknown>
    const user = sessionModel.selectors.profile(state)
    try {
      dispatch(basketModel.actions.startFetching())
      const result = await basketApi.addProductToBasket(product, user.uid)
      dispatch(
        notifyModel.actions.enqueueSnackbar({
          message: "Product is added to basket",
          type: "success",
        }),
      )
      dispatch(basketModel.actions.addToBasket(result))
    } catch (error) {
      dispatch(
        notifyModel.actions.enqueueSnackbar({
          message: "Oopse error is emerged",
          type: "error",
        }),
      )
    } finally {
      dispatch(basketModel.actions.endFetching())
    }
  },
)
