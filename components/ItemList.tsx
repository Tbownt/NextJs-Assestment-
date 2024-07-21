"use client";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Fade,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useEffect, useState } from "react";
import { Item } from "../types";
import { usePagination } from "@/hooks/usePagination";
import { ImageWithFallback } from "./ImageWithFallback";

interface ItemListProps {
  items: Item[];
}

const ItemList = ({ items }: ItemListProps) => {
  const {
    currentItems,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(items);

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    if (visibleIndex < currentItems.length) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [visibleIndex, currentItems.length]);

  useEffect(() => {
    setVisibleIndex(0);
    scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Box
      sx={{
        width: "85%",
        mt: 5,
        mb: 5,
      }}
    >
      <Grid container spacing={6}>
        {currentItems.map((nft, index) => (
          <Grid item xs={12} sm={6} md={4} key={nft.id}>
            <Fade in={index < visibleIndex} timeout={1000}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: {
                    lg: "95%",
                  },
                  marginLeft: 5,
                  marginRight: 5,
                  alignItems: "flex-start",
                  background:
                    "radial-gradient(circle, rgba(0,255,153,1) 18%, rgba(99,56,174,1) 88%)",
                }}
              >
                <ImageWithFallback
                  src={
                    nft.media.images[0]?.url
                      ? nft.media.images[0]?.url
                      : nft.media.images[1]?.url
                  }
                  alt={nft.title}
                  fallbackSrc="/images/noImg.png"
                  key={nft.tenantId}
                />
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    textAlign: "left",
                  }}
                >
                  <Box>
                    <Typography fontSize={"36px"}>{nft.title}</Typography>
                    <Typography>
                      <VisibilityOutlinedIcon /> {nft.views}
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <Typography color="#ffffff" variant="h6">
                        {nft.price}
                      </Typography>
                      <Typography color="#00ff99">points</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
      {/* paginacion */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          sx={{ color: "#00ff99" }}
        >
          Previous
        </Button>
        <Typography>
          Page {currentPage} of {totalPages}
        </Typography>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          sx={{ color: "#00ff99" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ItemList;
