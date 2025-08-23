"use client";

import * as React from "react";

// Simple theme provider that works with SSR
type Theme = "dark" | "light" | "system";
type ActualTheme = "dark" | "light";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  theme: Theme;
  actualTheme: ActualTheme;
  setTheme: (theme: Theme) => void;
};

const initialState: ThemeProviderState = {
  theme: "system",
  actualTheme: "light",
  setTheme: () => null,
};

const ThemeProviderContext = React.createContext;
