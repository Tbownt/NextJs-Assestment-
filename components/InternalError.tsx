import { Box, Typography } from "@mui/material";
import logo from "../public/images/wenGoodsLogo.svg";
import data from "../response.json";
import Image from "next/image";

export const InternalError = () => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: 2,
      }}
    >
      <Image
        src={logo}
        width={500}
        height={500}
        alt="logo"
        priority
        style={{ width: "40%" }}
      />
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography fontSize={"36px"} width={"60%"} textAlign={"center"}>
          Internal Server Error Please contact our Admin
        </Typography>

        <Typography textAlign={"center"} fontSize={"32px"}>
          Error:{" "}
          {data.status === false
            ? "failed to establish a connection to the server"
            : `${data.status}`}
        </Typography>
      </Box>
    </Box>
  );
};
