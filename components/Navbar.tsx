import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Image from "next/image";

export const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#6338ae" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",

            flexBasis: {
              xs: "96%",
              md: "50%",
              lg: "33%",
            },
          }}
        >
          <Typography fontSize={24}>WELCOME TO</Typography>

          <Image
            src={"/images/wenGoodsLogo.svg"}
            priority
            height={150}
            width={150}
            alt="logo"
            style={{
              width: "25%",
            }}
          />
          <Typography fontSize={24}> MARKETPLACE</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
