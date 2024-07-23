"use client";
import { useContext, useEffect, useState } from "react";
import { Box, Card, CardContent, Grid, Typography, Fade } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Item } from "../types";
import { usePagination } from "@/hooks/usePagination";
import { ImageWithFallback } from "./ImageWithFallback";
import { PaginationMarketPlace } from "./PaginationMarketPlace";
import { AppContext } from "@/context/MarketPlaceContext";
import { useRouter } from "next/navigation";

interface MarketPlaceListProps {
  items: Item[];
}

export const MarketPlace = ({ items }: MarketPlaceListProps) => {
  const {
    currentItems,
    currentPage,
    handleNextPage,
    handlePreviousPage,
    totalPages,
  } = usePagination(items);

  const router = useRouter();

  const { setSelectedCard } = useContext(AppContext);

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

  const handleCardClick = (nft: Item) => {
    setSelectedCard(nft);
    router.push("/Detail");
  };

  const formatPrice = (value: string) => {
    let strValue = value.toString();
    const formattedValue = strValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue;
  };

  const filteredItems = currentItems.filter(
    (item) => !(item.stock === 0 && item.hideWhenOutOfStock)
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: {
            lg: "85%",
            md: "90%",
            xs: "100%",
          },
          mt: 5,
          mb: 5,
        }}
      >
        <Grid container spacing={6}>
          {filteredItems.map((nft, index) => (
            <Grid item xs={12} sm={6} md={4} key={nft.id}>
              <Fade in={index < visibleIndex} timeout={1000}>
                <Card
                  onClick={() => handleCardClick(nft)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: {
                      lg: "95%",
                      md: "350px",
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
                    style={{
                      width: "100%",
                      height: "65%",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    }}
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
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "36px",
                            md: "20px",
                            xs: "24px",
                          },
                        }}
                      >
                        {nft.title.length > 20
                          ? nft.title.slice(0, 19)
                          : nft.title}
                      </Typography>
                      <Typography
                        fontWeight={"500"}
                        color={"#FFFFFF"}
                        sx={{
                          fontSize: {
                            lg: "24px",
                            md: "18px",
                          },
                        }}
                        variant="h6"
                      >
                        <VisibilityOutlinedIcon
                          sx={{ color: "black", mr: 1 }}
                        />
                        {nft.views}
                      </Typography>
                      <Box
                        sx={{ display: "flex", gap: 2, alignItems: "center" }}
                      >
                        <Typography color="#ffffff" variant="h6">
                          {formatPrice(nft.price.toString())}
                        </Typography>
                        <Typography
                          color="#00ff99"
                          sx={{
                            fontSize: {
                              lg: "24px",
                              md: "18px",
                            },
                          }}
                        >
                          points
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
        {/* paginacion */}
        <PaginationMarketPlace
          handlePreviousPage={handlePreviousPage}
          currentPage={currentPage}
          totalPages={totalPages}
          handleNextPage={handleNextPage}
        />
      </Box>
    </Box>
  );
};
