import { Item } from "@/types";
import { useState } from "react";

export const usePagination = (items: Item[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  return {
    itemsPerPage,
    currentItems,
    currentPage,
    setCurrentPage,
    handlePreviousPage,
    handleNextPage,
    totalPages,
  };
};
