"use client";
import React, { useState, createContext } from "react";
import { Item } from "@/types";

interface AppContextProps {
  openSideMenu: boolean;
  view: "admin" | "user";
  selectedCard?: Item | null;
  toggleSideMenu: () => void;
  setView: (view: "admin" | "user") => void;
  setSelectedCard: (card: Item) => void;
}

interface ContextProps {
  children: JSX.Element | JSX.Element[];
}
export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: ContextProps) => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [view, setViewState] = useState<"admin" | "user">("admin");
  const [selectedCard, setSelectedCardState] = useState<
    Item | null | undefined
  >(null);

  const toggleSideMenu = () => {
    setOpenSideMenu((prev) => !prev);
  };

  const setView = (view: "admin" | "user") => {
    setViewState(view);
  };

  const setSelectedCard = (item: Item) => {
    setSelectedCardState(item);
  };

  return (
    <AppContext.Provider
      value={{
        openSideMenu,
        view,
        selectedCard,
        toggleSideMenu,
        setView,
        setSelectedCard,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
