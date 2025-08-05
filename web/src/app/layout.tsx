import { AppProvider } from "@/components/providers/app-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leonguyenstudio",
  description: "leonguyenstudio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
