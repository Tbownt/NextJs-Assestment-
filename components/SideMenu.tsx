"use client";
import { AppContext } from "@/context/MarketPlaceContext";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  Typography,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import logo from "@/public/images/wenGoodsLogo.svg";
import response from "../response.json";

export const SideMenu = () => {
  const { openSideMenu, toggleSideMenu, view, setView } =
    useContext(AppContext);
  const items = response.data.rows;

  // Calculate totalStock using map
  const totalStock = items
    .map((item) => item.stock)
    .reduce((total, stock) => total + stock, 0);

  // Calculate totalItems using map
  const totalItems = items.map((item) => item).length;

  return (
    <Drawer anchor="right" open={openSideMenu} onClose={toggleSideMenu}>
      <Image
        src={logo}
        height={500}
        width={500}
        alt="logo"
        style={{ width: "30%", alignSelf: "center", marginTop: 10 }}
      />
      <List>
        {view === "admin" ? (
          <>
            <ListItem sx={{ gap: 1 }}>
              <Typography variant="h6" fontSize={16}>
                You are logged in as
              </Typography>
              <Typography fontSize={18}>{view.toUpperCase()}</Typography>
            </ListItem>
            <Divider />
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" fontSize={16}>
                Total Items in Stock:
              </Typography>
              <Typography fontSize={16}>{totalStock}</Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" fontSize={16}>
                Total Items:{" "}
              </Typography>
              <Typography fontSize={16}>{totalItems}</Typography>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem sx={{ textAlign: "center" }}>
              <Link href="/">
                <Typography
                  variant="h6"
                  sx={{
                    "&:hover": {
                      color: "#00ff99",
                    },
                  }}
                >
                  Home
                </Typography>
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link
                href="https://opensea.io/es/collection/wengoods"
                target="_blank"
              >
                <Typography
                  fontSize={26}
                  sx={{
                    "&:hover": {
                      color: "#00ff99",
                    },
                  }}
                >
                  Buy $GOODS
                </Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://x.com/wen_goods" passHref>
                <Typography
                  fontSize={26}
                  sx={{
                    "&:hover": {
                      color: "#00ff99",
                    },
                  }}
                >
                  Follow us on X
                </Typography>
              </Link>
            </ListItem>
          </>
        )}
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={() => setView(view === "admin" ? "user" : "admin")}
            sx={{
              color: "black",
              backgroundColor: "#00ff99",
              "&:hover": {
                color: "#00ff99",
                background: "black",
              },
            }}
          >
            {view === "admin" ? "Check as User" : "Back to Admin"}
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};
