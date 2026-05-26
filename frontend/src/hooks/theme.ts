"use client"

import { useState, useMemo } from 'react';
import { createTheme } from '@mui/material';
import { Mode } from '@/types';

export const useCreateTheme = () => {
    const [mode, setMode] = useState<Mode>("light");
    
    const toggleTheme = () => {
        setMode((prev) => {
            const next = prev === "light" ? "dark" : "light";
            localStorage.setItem("theme-mode", next);
            return next;
        });
    };
    
    const theme = useMemo(() => createTheme({ palette: { mode } }), [mode]);

    return { mode, theme, toggleTheme }
}