export type Coin = {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: 0;
  data: {
    price: number;
    price_btc: number;
  };
};
