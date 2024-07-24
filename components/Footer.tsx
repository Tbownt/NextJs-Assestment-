import { Box, Typography, Link, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import Image from "next/image";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2c384a",
        padding: "20px",
        textAlign: "center",
        // mt: 4,
        opacity: "95%",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Image
          src="/images/wenGoodsLogo.svg"
          alt="WenGoods Logo"
          width={500}
          height={500}
          style={{ width: "100px", marginBottom: 15 }}
          priority
        />
        <Typography variant="h6" fontSize={14} sx={{ opacity: "70%" }}>
          Copyright © Wengoods 2024. All Rights Reserved.
        </Typography>

        <Typography variant="h6" fontSize={14} sx={{ opacity: "70%" }}>
          Terms and Conditions
        </Typography>
      </Box>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 2,
          justifyContent: "center",
        }}
      >
        <IconButton
          aria-label="Twitter"
          color="primary"
          href="https://x.com/wen_goods"
          target="_blank"
        >
          <XIcon
            sx={{
              color: "#000000",
              borderRadius: "50%",
              "&:hover": {
                color: "#00ff99",
              },
            }}
          />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default Footer;
