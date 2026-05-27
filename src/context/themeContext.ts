"use client";

import { createContext, useContext } from "react";
import { ThemeContextTypes } from "@/types";

export const ThemeContext = createContext<ThemeContextTypes>({
  mode: "light",
  toggleTheme: () => {}
});

export const useThemeContext = () => useContext(ThemeContext);
