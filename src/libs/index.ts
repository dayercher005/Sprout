import Coingecko from "@coingecko/coingecko-typescript";
import { COINGECKO_API_KEY } from "@/config";

export const client = new Coingecko({
  demoAPIKey: COINGECKO_API_KEY,
  environment: "demo"
});
