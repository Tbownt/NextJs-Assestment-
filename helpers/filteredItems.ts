import { Item } from "@/types";

export const filteredItems = (currentItems: Item[]) => {
  return currentItems.filter(
    (item) => !(item.stock === 0 && item.hideWhenOutOfStock)
  );
};
