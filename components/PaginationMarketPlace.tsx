import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface PaginationProps {
  handlePreviousPage: () => void;
  handleNextPage: () => void;
  currentPage: number;
  totalPages: number;
}

export const PaginationMarketPlace = ({
  handlePreviousPage,
  currentPage,
  totalPages,
  handleNextPage,
}: PaginationProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: {
          sx: 12.5,
          md: 25,
        },
        mt: 5,
      }}
    >
      <Button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        sx={{ color: "#00ff99", fontSize: "24px" }}
      >
        Previous
      </Button>
      <Typography fontSize={24}>
        Page {currentPage} of {totalPages}
      </Typography>
      <Button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        sx={{ color: "#00ff99", fontSize: "24px" }}
      >
        Next
      </Button>
    </Box>
  );
};
