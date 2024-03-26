import { RootState } from "@/store";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Coin } from "./type";

const coinPriceEntityAdapter = createEntityAdapter<Coin>();

export const coinPriceSlice = createSlice({
  name: "coinPrices",
  initialState: coinPriceEntityAdapter.getInitialState(),
  reducers: {
    addAll: coinPriceEntityAdapter.addMany,
  },
});

export const coinPriceActions = coinPriceSlice.actions;
export const coinPriceSelector = coinPriceEntityAdapter.getSelectors<RootState>(
  (s) => s.coinPrice
);

export default coinPriceSlice.reducer;
