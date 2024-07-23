import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import { AppProvider } from "@/context/MarketPlaceContext";
import { SideMenu } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wengoods",
  description: "Challenge provide by Wengoods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>
          <ThemeProvider theme={theme}>
            {children}
            <SideMenu />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
