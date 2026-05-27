import { FC } from "react";
import { Box, Typography, Button } from "@mui/material";
import { ChevronRight } from "lucide-react";
import { HomeData } from "@/data/home";

export const BannerSection: FC = () => {
  const BannerSectionData = HomeData.BannerSection;
  const SignupDetails = BannerSectionData.signupButton;

  return (
    <Box sx={{ py: 14, px: 3 }}>
      <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center" }}>
        <Typography
          variant='h1'
          sx={{
            fontSize: "clamp(2.5rem, 7vw, 5rem)",
            lineHeight: 1.05,
            mb: 2.5
          }}
        >
          {BannerSectionData.header}
        </Typography>
        <Typography
          variant='body1'
          sx={{
            fontSize: "1.1rem",
            mb: 5,
            maxWidth: 400,
            mx: "auto",
            lineHeight: 1.7
          }}
        >
          {BannerSectionData.description}
        </Typography>
        <Button
          variant='contained'
          endIcon={<ChevronRight />}
          href={SignupDetails.path}
          sx={{ px: 6, py: 1.75 }}
        >
          {SignupDetails.label}
        </Button>
      </Box>
    </Box>
  );
};
