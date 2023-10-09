import { createAsyncThunk } from "@reduxjs/toolkit";

import { Basket } from "@/entities/basket";
import { basketApi } from "@/shared/api/basket";
import { UserId } from "@/shared/api/session";

export const addToBasketFx = createAsyncThunk('feature/basket/addToBasket', 
  async ({basket, userId}: { basket: Basket[], userId: UserId}, { dispatch }) => {
  const result = await basketApi.setBasket(basket, userId)
  console.log(basket)
})