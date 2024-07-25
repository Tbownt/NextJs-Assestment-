"use client";
import { Box, Button, Typography } from "@mui/material";
import { ImageWithFallback } from "./ImageWithFallback";
import { useRouter } from "next/navigation";

export const NotFoundID = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        backgroundColor: "#121212",
      }}
    >
      <ImageWithFallback
        src="/images/wenGoodsLogo.svg"
        alt="logo"
        fallbackSrc="/images/noImg.png"
        style={{
          width: "30%",
        }}
      />
      <Typography fontSize={36}>404 Not found</Typography>
      <Button
        onClick={() => router.push("/Marketplace")}
        sx={{
          fontSize: "20px",
          color: "#00ff99",
          "&:hover": {
            backgroundColor: "#00ff99",
            color: "#FFFFFF",
          },
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};
