import { cgClient } from "@/libs/index";

export const NftHandlers = {
  getNftMarket: async () => {
    const NftMarketData = await cgClient.nfts.getMarkets({
      per_page: 15
    });
    return NftMarketData;
  }
};
