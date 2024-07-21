import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import data from "../response.json";
import { Navbar } from "@/components/Navbar";

const HomePage = () => {
  const items = data.data.rows;

  const LazyListItems = dynamic(() => import("../components/ItemList"));
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <LazyListItems items={items} />
      </Box>
    </Box>
  );
};

export default HomePage;
