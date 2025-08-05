"use client";

import { SmoothScrollProvider } from "./smooth-scroll-provider";
import { ThemeProvider } from "./theme-provider";

/**
 * @description Combine all providers for the app
 */
export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </SmoothScrollProvider>
  );
}
