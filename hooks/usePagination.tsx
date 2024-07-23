import { Item } from "@/types";
import { shuffleArray } from "@/utils/ShuffleArray";
import { useState, useEffect, useMemo } from "react";

export const usePagination = (items: Item[]) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const shuffledItems = useMemo(() => shuffleArray(items), [items]);

  const filteredItems = useMemo(
    () =>
      shuffledItems.filter(
        (item) => !(item.stock === 0 && item.hideWhenOutOfStock)
      ),
    [shuffledItems]
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredItems.slice(startIndex, endIndex);

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
