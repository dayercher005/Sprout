import { FC } from "react";
import { HomeData } from "@/data/home";
import { Box, Typography, Container } from "@mui/material";

export const FeaturesSection: FC = () => {
  const ACCENT = "#00ff87";
  const BORDER = "rgba(255,255,255,0.08)";
  const BG = "#080808";
  const PAPER = "#111111";
  const FeaturesSectionData = HomeData.FeaturesSection;

  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth='xl' sx={{ px: { xs: 2, md: 4 } }}>
        <Box sx={{ mb: 8 }}>
          <Typography sx={{ display: "block", mb: 1.5 }}>
            {FeaturesSectionData.header}
          </Typography>
          <Typography
            variant='h2'
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              maxWidth: 520,
              lineHeight: 1.05
            }}
          >
            {FeaturesSectionData.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" }
          }}
        >
          {FeaturesSectionData.points.map(({ Icon, title, description }) => (
            <Box
              key={title}
              sx={{
                p: 4,
                transition: "background-color 200ms",
                cursor: "default"
              }}
            >
              <Icon className='feat-icon' />
              <Typography variant='h5' sx={{ mb: 1.5, fontSize: "1.1rem" }}>
                {title}
              </Typography>
              <Typography
                variant='body2'
                sx={{
                  color: "text.secondary",
                  lineHeight: 1.7,
                  fontSize: "0.875rem"
                }}
              >
                {description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
