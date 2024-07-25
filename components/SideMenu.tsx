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
import { useContext, useMemo } from "react";
import logo from "@/public/images/wenGoodsLogo.svg";
import response from "../response.json";

export const SideMenu = () => {
  const { openSideMenu, toggleSideMenu, view, setView } =
    useContext(AppContext);
  const items = response.data.rows;

  //Memoized data to prevent any rerenders opening the sidemenu
  const lastAddedItem = useMemo(() => {
    return items.reduce(
      (latest, item) =>
        new Date(item.createdAt) > new Date(latest.createdAt) ? item : latest,
      //retrieve data mutating to Date
      items[0]
    );
  }, [items]);

  const lastDeletedItem = useMemo(() => {
    return items.reduce((latest, item) => {
      const latestDeletedAt = latest.deletedAt
        ? new Date(latest.deletedAt)
        : new Date(0);
      return item.deletedAt && new Date(item.deletedAt) > latestDeletedAt
        ? item
        : latest;
      //returning last deletedAt
    }, items[0]);
  }, [items]);

  const totalStock = useMemo(() => {
    return items.reduce((total, item) => total + item.stock, 0);
  }, [items]);

  const totalItems = useMemo(() => {
    return items.length;
  }, [items]);

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
                Last Added Item:
              </Typography>
              <Typography fontSize={16}>{lastAddedItem.title}</Typography>
            </ListItem>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography variant="h6" fontSize={16}>
                Last Deleted Item:
              </Typography>
              <Typography fontSize={16}>
                {` ${lastDeletedItem?.title}` || "None"}
              </Typography>
            </ListItem>
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
