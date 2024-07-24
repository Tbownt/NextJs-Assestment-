import response from "../../response.json";
import { Box } from "@mui/material";
import { Navbar, Footer, MarketPlace, InternalError } from "@/components";

const MarketPlacePage = () => {
  const items = response.data.rows;

  if (response.status === true && response.message === "Ok") {
    return (
      <Box sx={{ minHeight: "100vh" }}>
        <Navbar />
        <MarketPlace items={items} />
        <Footer />
      </Box>
    );
  } else {
    return <InternalError />;
  }
};

export default MarketPlacePage;
