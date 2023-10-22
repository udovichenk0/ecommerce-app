import { createAsyncThunk } from "@reduxjs/toolkit"

import { basketModel } from "@/entities/basket"
import { notifyModel } from "@/entities/notification"
import { sessionModel } from "@/entities/session"

import { basketApi } from "@/shared/api/basket"
import { ProductId } from "@/shared/api/product"

export const removeFromBasketFx = createAsyncThunk(
  "feature/basket/addToBasket",
  async ({ productId }: { productId: ProductId }, { dispatch, getState }) => {
    const state = getState() as Record<string, unknown>
    try {
      const user = sessionModel.selectors.profile(state)
      dispatch(basketModel.actions.startFetching())
      const result = await basketApi.removeProductFromBasket(
        productId,
        user.uid,
      )

      dispatch(basketModel.actions.removeFromBasket(result))
      dispatch(
        notifyModel.actions.enqueueSnackbar({
          message: "Product is removed from basket",
          type: "success",
        }),
      )
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
