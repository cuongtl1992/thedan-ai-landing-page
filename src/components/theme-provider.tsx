"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  themes?: string[];
  forcedTheme?: string;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={props.attribute as "class" | "data-theme"}
      defaultTheme={props.defaultTheme}
      enableSystem={props.enableSystem}
      disableTransitionOnChange={props.disableTransitionOnChange}
      themes={props.themes}
      forcedTheme={props.forcedTheme}
    >
      {children}
    </NextThemesProvider>
  );
}