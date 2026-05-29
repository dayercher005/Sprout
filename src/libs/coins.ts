import "server-only";
import { cgClient } from "@/libs/index";

export const CoinHandlers = {
  getCoinList: async () => {
    const coinMarketsData = await cgClient.coins.markets.get({
      vs_currency: "usd",
      per_page: 30
    });
    return coinMarketsData;
  }
};
