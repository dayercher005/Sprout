import { FC } from "react";
import { HomeData } from "@/data/home";
import { Box, Typography, Container } from "@mui/material";

export const SetupSection: FC = () => {
  const SetupSectionData = HomeData.SetupSection;

  return (
    <Container maxWidth='xl' sx={{ py: 12, px: { xs: 2, md: 4 } }}>
      <Box sx={{ mb: 8 }}>
        <Typography sx={{ display: "block", mb: 1.5 }}>
          {SetupSectionData.header}
        </Typography>
        <Typography
          variant='h2'
          sx={{ fontSize: { xs: "2.25rem", md: "3rem" }, lineHeight: 1 }}
        >
          HOW IT WORKS.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }
        }}
      >
        {SetupSectionData.points.map(({ step, title, description }, index) => (
          <Box key={step} sx={{ p: { xs: 4, md: 5 } }}>
            <Typography
              variant='h1'
              sx={{ fontSize: "5rem", mb: 3, userSelect: "none" }}
            >
              {step}
            </Typography>
            <Typography variant='h4' sx={{ mb: 1.5, fontSize: "1.2rem" }}>
              {title}
            </Typography>
            <Typography
              variant='body2'
              sx={{ color: "text.secondary", lineHeight: 1.7 }}
            >
              {description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};
