import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import { CalculateDisplayTypes } from "@/types";

export const CalculateDisplay: FC<CalculateDisplayTypes> = ({
  title,
  value
}) => {
  return (
    <Grid>
      <Typography variant='caption' sx={{ color: "#c4b5fd" }}>
        {title}
      </Typography>
      <Typography variant='h5' sx={{ color: "#f74343" }}>
        {value}
      </Typography>
    </Grid>
  );
};
