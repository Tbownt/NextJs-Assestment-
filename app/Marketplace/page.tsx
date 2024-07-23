import data from "../../response.json";
import { Box } from "@mui/material";
import { Navbar, Footer, MarketPlace, InternalError } from "@/components";

const MarketPlacePage = () => {
  const items = data.data.rows;

  if (data.status === true && data.message === "Ok") {
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
