"use client";

import { coinPriceSelector, useLoadCoinPrices } from "@/features/coin-price";
import { favoriteCoinSelector } from "@/features/favorite-coin";
import { useAppSelector } from "@/store";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import FavoriteCoins from "./coin-favorite";
import CoinPrices from "./coin-prices";

export default function CoinDashBoard() {
  useLoadCoinPrices();
  const coins = useAppSelector(coinPriceSelector.selectAll);
  const favoriteCoins = useAppSelector(favoriteCoinSelector.selectAll);

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Options" color="primary">
        <Tab key="coin-prices" title="Coin Prices">
          <Card>
            <CardBody>
              <CoinPrices coins={coins} />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="favorite" title="Favorite Coins">
          <Card>
            <CardBody>
              <FavoriteCoins coins={favoriteCoins} />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
