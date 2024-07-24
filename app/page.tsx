"use client";
import { Footer, Navbar } from "@/components";
import { AppContext } from "@/context/MarketPlaceContext";
import { Box, Typography, Zoom } from "@mui/material";
import Image from "next/image";
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
          justifyContent: "center",
          backgroundImage: "url(/images/homeBg.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, my: 10 }}>
          <Zoom in timeout={500} unmountOnExit>
            <Typography fontSize={36}>Welcome back </Typography>
          </Zoom>
          <Zoom in timeout={500}>
            <Typography fontSize={36} color={"#00ff99"}>
              {view}
            </Typography>
          </Zoom>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: {
              xs: "70%",
              lg: "45%",
            },
          }}
        >
          <Zoom in timeout={1000} unmountOnExit>
            <Image
              src="/images/wenGoodsLogo.svg"
              alt="WenGoods Logo"
              width={500}
              height={500}
              priority
              style={{ alignSelf: "center", marginTop: 15, marginBottom: 15 }}
            />
          </Zoom>
        </Box>
        <Zoom in timeout={1250}>
          <Typography
            sx={{
              textAlign: "center",
              width: {
                lg: "50%",
                xs: "80%",
              },
              my: 5,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora,
            porro asperiores eaque incidunt voluptate iste, nostrum voluptas
            vitae odio praesentium id dolore architecto aut numquam rem quas
            alias nesciunt explicabo! lorem
          </Typography>
        </Zoom>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "70px",
            marginTop: "70px",
            backgroundColor: "#00ff99",
            height: "40px",
            width: {
              lg: "15%",
              xs: "50%",
            },
          }}
        >
          <Link href="/Marketplace">
            <Typography
              sx={{
                fontSize: {
                  lg: 24,
                  xs: 18,
                },
                color: "#000000",
                "&:hover": {
                  color: "#FFFFFF",
                  transition: "ease-in 0.2s",
                },
              }}
            >
              {`> CHECK MARKETPLACE <`}
            </Typography>
          </Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
