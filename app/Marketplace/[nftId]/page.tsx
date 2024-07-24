"use client";

import { useEffect, useContext, Suspense } from "react";
import { AppContext } from "@/context/MarketPlaceContext";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { ImageWithFallback } from "@/components";
import { useRouter } from "next/navigation";
import response from "../../../response.json";

const NftDetail = ({ params }: { params: { nftId: string } }) => {
  const { selectedCard, setSelectedCard } = useContext(AppContext);
  const router = useRouter();

  useEffect(() => {
    const itemId = params.nftId.toString();

    if (!selectedCard || selectedCard.id.toString() !== itemId) {
      const foundItem = response.data.rows.find(
        (item) => item.id.toString() === itemId
      );

      if (foundItem) {
        setSelectedCard(foundItem);
      }
    }
  }, [params.nftId, selectedCard, setSelectedCard]);

  if (!selectedCard || selectedCard.id.toString() !== params.nftId) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
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
        <CircularProgress color="success" />
        <Typography fontSize={36}>Loading...</Typography>
        <Button
          onClick={() => router.push("/Marketplace")}
          sx={{ fontSize: "30px" }}
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button onClick={() => router.push("/Marketplace")}>Back</Button>
      <Typography>{selectedCard.title}</Typography>
      <ImageWithFallback
        src={
          selectedCard.media.images[0]?.url
            ? selectedCard.media.images[0]?.url
            : "/images/noImg.png"
        }
        alt={selectedCard.title}
        fallbackSrc="/images/noImg.png"
        style={{
          width: "50%",
        }}
      />
      <Typography>{selectedCard.description}</Typography>
      <Typography>{`Price: ${selectedCard.price}`}</Typography>
      <Typography>{`Views: ${selectedCard.views}`}</Typography>
    </Box>
  );
};

export default NftDetail;
