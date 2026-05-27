"use client";

import { Box } from "@mui/material";
import { NavigationSection } from "@/components/home/nav";
import { HeroSection } from "@/components/home/hero";
import { FeaturesSection } from "@/components/home/features";
import { SetupSection } from "@/components/home/setup";
import { BannerSection } from "@/components/home/banner";

export default function Home() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        minHeight: "100vh",
        color: "text.primary",
        overflowX: "hidden"
      }}
    >
      <NavigationSection />
      <HeroSection />
      <FeaturesSection />
      <SetupSection />
      <BannerSection />
    </Box>
  );
}
