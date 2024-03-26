import { Coin } from "@/features/coin-price";
import { favoriteCoinActions } from "@/features/favorite-coin";
import { useAppDispatch } from "@/store";
import { Button } from "@nextui-org/react";

export default function FavoriteCoins({ coins }: { coins: Coin[] }) {
  const dispatch = useAppDispatch();

  return (
    <div className="grid grid-cols-6 gap-4">
      {coins.map((coin) => (
        <div
          key={coin.coin_id}
          className="p-4 rounded-lg bg-slate-800 flex flex-col"
        >
          <img src={coin.small} alt={coin.name} className="mb-2 self-start" />
          <h1 className="font-bold text-medium">{coin.name}</h1>
          <h2 className="text-wrap mb-4">{coin.price_btc.toFixed(10)}</h2>
          <Button
            fullWidth
            size="sm"
            color="danger"
            className="mt-auto"
            onClick={() => {
              dispatch(favoriteCoinActions.removeOne(coin.id));
            }}
          >
            Remove
          </Button>
        </div>
      ))}
    </div>
  );
}
