"use client";
import { Footer, Navbar } from "@/components";
import { AppContext } from "@/context/MarketPlaceContext";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";

const HomePage = () => {
  const { view } = useContext(AppContext);
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: 1500,
        }}
      >
        <h1>HomePage</h1>
        <Typography variant="h6">Welcome back {view} </Typography>
        <Link href="/Marketplace">
          <Typography>Check MarketPlace</Typography>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
