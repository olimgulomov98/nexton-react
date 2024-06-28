import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CardItem } from "../../../libs/types/search";
import React, { useEffect, useState } from "react";

interface HomeNavbarProps {
  cardItems: CardItem[];
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cardItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setSignupOpen,
    setLoginOpen,
  } = props;
  const authMember = null;

  /** HANDLERS **/

  return (
    <div className="home-navbar">
      <Container className={"navbar-container"}>
        <Stack className={"menu"}>
          <Box className={"brand-logo-cover"}>
            <NavLink to="/">
              <img className="brand-logo" src="/img/logo.png" alt="" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>
            <Box className={"hover-line"}>
              <NavLink to="/shop" activeClassName={"underline"}>
                Shop
              </NavLink>
            </Box>
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className={"hover-line"}>
              <NavLink to="/contact" activeClassName={"underline"}>
                Contact
              </NavLink>
            </Box>

            <Basket
              cardItems={cardItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                alt=""
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              Exclusive collection for everyone
            </Box>
            <Box className={"wel-txt"}>The Choice, not just a choice</Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className={"signup-button"}
                  onClick={() => setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
