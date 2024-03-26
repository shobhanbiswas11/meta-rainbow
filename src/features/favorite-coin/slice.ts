import { RootState } from "@/store";
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Coin } from "../coin-price";

const favoriteCoinEntityAdapter = createEntityAdapter<Coin>();

export const favoriteCoinSlice = createSlice({
  name: "coinPrices",
  initialState: favoriteCoinEntityAdapter.getInitialState(),
  reducers: {
    addOne: favoriteCoinEntityAdapter.addOne,
    removeOne: favoriteCoinEntityAdapter.removeOne,
  },
});

export const favoriteCoinSelector =
  favoriteCoinEntityAdapter.getSelectors<RootState>((s) => s.favoriteCoin);

export const favoriteCoinActions = favoriteCoinSlice.actions;
export default favoriteCoinSlice.reducer;
