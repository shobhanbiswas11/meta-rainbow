import { useAppDispatch } from "@/store";
import axios from "axios";
import { useEffect } from "react";
import { coinPriceActions } from "./slice";

const endpoint = "https://api.coingecko.com/api/v3/search/trending";

export function useLoadCoinPrices() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(endpoint).then((d) => {
      dispatch(coinPriceActions.addAll(d.data.coins.map((c: any) => c.item)));
    });
  }, []);
}
