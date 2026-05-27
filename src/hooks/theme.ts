"use client";

import { useState, useMemo, useEffect } from "react";
import { createTheme } from "@mui/material";
import { Mode } from "@/types";
import { setCookie, getCookie } from "cookies-next";

export const useCreateTheme = () => {
  const [mode, setMode] = useState<Mode>("light");

  useEffect(() => {
    const syncFromCookie = () => {
      const saved = getCookie("theme") as "light" | "dark" | undefined;
      if (saved && saved !== mode) setMode(saved);
    };

    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) syncFromCookie();
    };

    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", syncFromCookie);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", syncFromCookie);
    };
  }, [mode]);

  const toggleTheme = () => {
    const next: Mode = mode === "light" ? "dark" : "light";
    setMode(next);
    setCookie("theme", next, { maxAge: 60 * 60 * 24 * 365 }); // 1 year
  };

  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

  return { mode, theme, toggleTheme };
};
