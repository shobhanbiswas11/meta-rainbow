import coinPriceReducer from "@/features/coin-price/slice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import favoriteCoinReducer from "./features/favorite-coin/slice";

export const store = configureStore({
  reducer: {
    coinPrice: coinPriceReducer,
    favoriteCoin: favoriteCoinReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
