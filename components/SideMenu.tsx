"use client";
import { AppContext } from "@/context/MarketPlaceContext";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useContext } from "react";
import logo from "@/public/images/wenGoodsLogo.svg";

export const SideMenu = () => {
  const { openSideMenu, toggleSideMenu, view } = useContext(AppContext);
  return (
    <Drawer anchor="right" open={openSideMenu} onClose={toggleSideMenu}>
      <Image
        src={logo}
        height={500}
        width={500}
        alt={"logo"}
        style={{ width: "30%", alignSelf: "center", marginTop: 10 }}
      />
      <List>
        <ListItem>
          <Typography variant="h6">{`You are logged as ${view.toUpperCase()}`}</Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" />
        </ListItem>
      </List>
    </Drawer>
  );
};
