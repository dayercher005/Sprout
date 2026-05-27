"use client";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContext } from "@/context/themeContext";
import { useCreateTheme } from "@/hooks/theme";
import { Mode } from "@/types";

export function ThemeContextProvider({
  children,
  initialMode = "light"
}: {
  children: React.ReactNode;
  initialMode?: Mode;
}) {
  const { mode, toggleTheme, theme } = useCreateTheme();

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline>{children}</CssBaseline>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
