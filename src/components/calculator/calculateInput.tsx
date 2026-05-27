import { FC } from "react";
import { Grid, TextField } from "@mui/material";
import { CalculateInputTypes } from "@/types";

export const CalculateInput: FC<CalculateInputTypes> = ({
  label,
  type,
  placeholder
}) => {
  return (
    <Grid>
      <TextField
        fullWidth
        label={label}
        type={type}
        placeholder={placeholder}
      />
    </Grid>
  );
};
