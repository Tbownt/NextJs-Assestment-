"use client";
import { createTheme } from "@mui/material";
import localFont from "next/font/local";

const headerFont = localFont({
  src: "../public/fonts/VeneerTwo.ttf",
  display: "swap",
  weight: "400",
  preload: true,
});

const subtitleFont = localFont({
  src: "../public/fonts/Montserrat-SemiBold.ttf",
  display: "swap",
  weight: "400",
  preload: true,
});

const theme = createTheme({
  typography: {
    fontFamily: headerFont.style.fontFamily,
    h6: {
      fontFamily: subtitleFont.style.fontFamily,
    },
  },
});

export default theme;
