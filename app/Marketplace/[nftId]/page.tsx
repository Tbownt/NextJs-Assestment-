"use client";
import { useEffect, useContext } from "react";
import Image from "next/image";
import { AppContext } from "@/context/MarketPlaceContext";
import { Box, Button, Typography, Zoom } from "@mui/material";
import { Footer, ImageWithFallback, Navbar, NotFoundID } from "@/components";
import { useRouter } from "next/navigation";
import response from "../../../response.json";
import { formatPrice } from "../../../helpers/formatPrice";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const NftDetail = ({ params }: { params: { nftId: string } }) => {
  const { selectedCard, setSelectedCard } = useContext(AppContext);
  const router = useRouter();
  const itemId = params.nftId;

  useEffect(() => {
    //This effect looks for an ID to match in our response.data.rows and our context
    //if the user puts manually an ID that exist, the effect will look into the response object
    //and return a value if it found it, otherwise
    //it will return a notFound component
    if (!selectedCard || selectedCard.id.toString() !== itemId) {
      const foundItem = response.data.rows.find(
        (item) => item.id.toString() === itemId
      );

      if (!foundItem) {
        setSelectedCard(null);
      } else {
        setSelectedCard(foundItem);
      }
    }
  }, [itemId, selectedCard, setSelectedCard]);

  if (!selectedCard) {
    return <NotFoundID />;
  }

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          backgroundImage: "url(/images/detail_background.jpg)",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <Button
          onClick={() => router.push("/Marketplace")}
          sx={{
            alignSelf: "flex-start",
            fontSize: 36,
            ml: 2,
            color: "#00ff99",
            gap: 1,
            "&:hover": {
              color: "#FFFFFF",
            },
          }}
        >
          <ArrowCircleLeftOutlinedIcon sx={{ height: "40px", width: "40px" }} />
          BACK TO MARKETPLACE
        </Button>
        <Typography
          fontSize={36}
          sx={{
            width: {
              xs: "80%",
              lg: "30%",
              md: "40%",
            },
            textAlign: "center",
            mb: 5,
            color: "#000000",
            backgroundColor: "#00ff99",
          }}
        >
          {selectedCard.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: 3,
            width: {
              xs: "90%",
            },
            justifyContent: "center",
          }}
        >
          <ImageWithFallback
            src={
              selectedCard.media.images[0]?.url
                ? selectedCard.media.images[0]?.url
                : "/images/noImg.png"
            }
            alt={selectedCard.title}
            fallbackSrc="/images/noImg.png"
            style={{
              alignSelf: "center",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#FFFFFF",
              my: 2,
              width: {
                xs: "100%",
                lg: "50%",
              },
              height: {
                xs: "80%",
              },
              padding: 5,
              position: "relative",
              alignSelf: "center",
              borderRadius: 2,
            }}
          >
            <Image
              src="/images/wenGoodsLogo.svg"
              alt="WenGoods Logo"
              width={500}
              height={500}
              style={{
                width: "100px",
                position: "absolute",
                top: 5,
                left: 5,
              }}
              priority
            />
            <Zoom in timeout={750}>
              <Typography
                variant="h6"
                fontSize={16}
                color="#000000"
                sx={{ my: 2 }}
              >
                {selectedCard.description.length > 0
                  ? selectedCard.description
                  : "No description"}
              </Typography>
            </Zoom>
            <Box
              sx={{
                backgroundColor: "#00ff99",
                display: "flex",
                flexDirection: "row",
                gap: 1,
                width: { md: "30%", lg: "30%" },
                justifyContent: "center",
                my: 2,
              }}
            >
              <Zoom in timeout={1000}>
                <Typography color="#000000" fontSize={24}>
                  PRICE: {formatPrice(selectedCard.price.toString())} POINTS
                </Typography>
              </Zoom>
            </Box>
            <Box
              sx={{
                backgroundColor: "#00ff99",
                display: "flex",
                gap: 1,
                width: { xs: "70%", md: "30%", lg: "30%" },
                justifyContent: "center",
                my: 4,
              }}
            >
              <Zoom in timeout={1200}>
                <Typography color="#000000" fontSize={24}>
                  STOCK: {selectedCard.stock}
                </Typography>
              </Zoom>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#00ff99",
                width: { md: "30%", lg: "30%" },
                gap: 1,
                my: 3,
              }}
            >
              <Typography color="#000000" fontSize={24}>
                {`TOTAL VIEWS: ${selectedCard.views}`}
              </Typography>
              <VisibilityOutlinedIcon
                sx={{
                  color: "black",
                  mr: 1,
                  height: "24px",
                  width: "24px",
                }}
              />
            </Box>
            {selectedCard.comingSoon && (
              <Image
                src="/images/coming_soon.png"
                alt="coming soon"
                width={500}
                height={500}
                style={{
                  width: "70px",
                  position: "absolute",
                  bottom: 5,
                  right: 5,
                }}
                priority
              />
            )}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default NftDetail;
