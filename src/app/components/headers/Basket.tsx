import React from "react";
import { Box, Button, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import { CardItem } from "../../../libs/types/search";
import { Messages, serverApi } from "../../../libs/config";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../libs/sweetAlert";
import { useGlobals } from "../../hooks/useGlobal";

interface BasketProps {
  cardItems: CardItem[];
  onAdd: (item: CardItem) => void;
  onRemove: (item: CardItem) => void;
  onDelete: (item: CardItem) => void;
  onDeleteAll: () => void;
}

export default function Basket(props: BasketProps) {
  const { cardItems, onAdd, onRemove, onDelete, onDeleteAll } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const history = useHistory();
  const itemsPrice: number = cardItems.reduce(
    (a: number, c: CardItem) => a + c.quantity * c.disPrice,
    0
  );
  const shippingCost: number = itemsPrice < 300 ? 10 : 0;
  const totalPrice = (itemsPrice + shippingCost).toFixed(1);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const proceedOrderHandler = async () => {
    try {
      handleClose();
      if (!authMember) throw new Error(Messages.error2);

      const order = new OrderService();
      await order.createOrder(cardItems);

      onDeleteAll();

      setOrderBuilder(new Date());
      history.push("/orders");
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <Box className={"hover-line"}>
      <IconButton
        aria-label="cart"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={cardItems.length} color="primary">
          <img
            src={"/icons/shopping-cart.svg"}
            alt=""
            className={"card-icon"}
          />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack className={"basket-frame"}>
          <Box className={"all-check-box"}>
            {cardItems.length === 0 ? (
              <div>Card is empty!</div>
            ) : (
              <Stack flexDirection={"row"}>
                <div>Card Products:</div>
                <DeleteForeverIcon
                  className="delete-icon"
                  color={"primary"}
                  onClick={() => onDeleteAll()}
                />
              </Stack>
            )}
          </Box>

          <Box className={"orders-main-wrapper"}>
            <Box className={"orders-wrapper"}>
              {cardItems.map((item: CardItem) => {
                const imagePath = `${serverApi}/${item.image}`;
                return (
                  <Box className={"basket-info-box"} key={item._id}>
                    <img src={imagePath} className={"product-img"} alt="" />
                    <div className="product-name-size">
                      <span className={"product-name"}>{item.name}</span>
                      <span className={"product-size"}>
                        {item.collection === "KIDS"
                          ? item.kidsSize
                          : item.size && item.collection === "SHOES"
                          ? item.shoeSize
                          : item.size}
                      </span>
                    </div>
                    <p className={"product-price"}>${item.disPrice}</p>
                    <Box sx={{ minWidth: 120 }}>
                      <div className="col-2">
                        <div className="remove">
                          <RemoveCircleIcon onClick={() => onRemove(item)} />
                        </div>{" "}
                        <div className={"product-quantity"}>
                          {item.quantity}
                        </div>
                        <div className="add">
                          <AddCircleIcon onClick={() => onAdd(item)} />
                        </div>
                        <div className={"cancel-btn"}>
                          <CancelIcon
                            color={"primary"}
                            onClick={() => onDelete(item)}
                          />
                        </div>
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          {cardItems.length !== 0 ? (
            <Box className={"basket-order"}>
              <Box className={"price-wrapper"}>
                <span className={"price-title"}>Item Price: </span>
                <span className={"price"}>${itemsPrice}</span>
              </Box>
              <div className={"price-wrapper"}>
                <span className={"price-title"}>Delivery Fee: </span>
                <span className={"price"}>${shippingCost}</span>
              </div>
              <div className={"price-wrapper"}>
                <span className={"price-title"}>Total Price: </span>
                <span className={"price"}>${totalPrice}</span>
              </div>

              <Button
                onClick={proceedOrderHandler}
                startIcon={<ShoppingCartIcon />}
                variant={"contained"}
                color={"secondary"}
              >
                Order
              </Button>
            </Box>
          ) : (
            " "
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
