"use client";
import { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AppContext } from "@/context/MarketPlaceContext";
import { SideMenu } from "./SideMenu";
import { useGetPathName } from "@/hooks/useGetPathName";
import Link from "next/link";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleSideMenu } = useContext(AppContext);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    //this Effect change the property static to sticky from the navbar once you scroll down the page
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      position={isScrolled ? "sticky" : "static"}
      sx={{
        backgroundColor: isScrolled ? "#6338ae" : "#121212",
        transition: "background-color 0.5s ease",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: {
              lg: 1,
              xs: 0.6,
            },
          }}
        >
          <Typography
            fontSize={24}
            sx={{ display: isSmallScreen ? "none" : "block" }}
          >
            WELCOME TO
          </Typography>
          <Link href="/">
            <Typography
              fontSize={26}
              sx={{
                color: isScrolled ? "#00ff99" : "#6338ae",
                transition: "color 0.2s ease",
              }}
            >
              WENGOODS
            </Typography>
          </Link>
          <Typography
            fontSize={24}
            sx={{ display: isSmallScreen ? "none" : "block" }}
          >
            {useGetPathName()}
          </Typography>
        </Box>
        <Button
          sx={{
            position: "absolute",
            right: 1,
            mr: 1,
            "&:hover": {
              backgroundColor: isScrolled ? "#7B47D6" : "#2c384a",
            },
          }}
          onClick={() => toggleSideMenu()}
        >
          <MenuIcon sx={{ color: "#FFFFFF" }} />
        </Button>
        <SideMenu />
      </Toolbar>
    </AppBar>
  );
};
