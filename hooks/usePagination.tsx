import { filteredItems } from "@/helpers";
import { Item } from "@/types";
import { useState, useEffect, useMemo } from "react";

export const usePagination = (items: Item[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const nftItems = useMemo(() => filteredItems(items), [items]);

  const totalPages = Math.ceil(nftItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = nftItems.slice(startIndex, endIndex);

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

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

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
