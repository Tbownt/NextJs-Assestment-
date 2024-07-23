"use client";
import { useContext } from "react";
import { AppContext } from "@/context/MarketPlaceContext";
import { Box, Button, Typography } from "@mui/material";
import { ImageWithFallback } from "@/components";
import { useRouter } from "next/navigation";

const DetailPage = () => {
  const { selectedCard } = useContext(AppContext);
  const router = useRouter();

  if (!selectedCard) {
    return <Typography>No item selected</Typography>;
  }

  return (
    <Box>
      <Button onClick={() => router.push("/Marketplace")}>Back</Button>
      <Typography variant="h2">{selectedCard.title}</Typography>
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

export default DetailPage;
