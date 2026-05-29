import { Box, Grid } from "@mui/material";
import { TrendingCollections } from "@/components/dashboard/trendingCollections";
import { TopCollection } from "@/components/dashboard/topCollection";
import { CoinHandlers } from "@/libs/coins";

export default async function Dashboard() {
  const CoinsMarketData = CoinHandlers.getCoinList();

  return (
    <>
      <Grid container spacing={3}>
        <Grid>
          <TrendingCollections />
        </Grid>

        <Grid>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <TopCollection />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
