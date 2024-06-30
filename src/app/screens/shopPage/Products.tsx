import React, { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  PaginationItem,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Pagination from "@mui/material/Pagination";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product, ProductInquiry } from "../../../libs/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../libs/enums/product.enum";
import { serverApi } from "../../../libs/config";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useHistory } from "react-router-dom";
import { CardItem } from "../../../libs/types/search";

SwiperCore.use([Autoplay, Navigation]);

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

interface ProductsProps {
  onAdd: (item: CardItem) => void;
}

export default function Products(props: ProductsProps) {
  const { onAdd } = props;
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [filterSortName, setFilterSortName] = useState("New");

  const [productSearch, setProductSearch] = useState<ProductInquiry>({
    page: 1,
    limit: 8,
    order: "createAt",
    // productCollection: ProductCollection.WOMEN,
    search: "",
  });

  const [searchText, setSearchText] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts(productSearch)
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, [productSearch]);

  useEffect(() => {
    if (searchText === "") {
      productSearch.search = "";
      setProductSearch({ ...productSearch });
    }
  }, [searchText]);

  /** HANDLERS **/

  const searchCollectionHandler = (collection: ProductCollection) => {
    productSearch.page = 1;
    productSearch.productCollection = collection;
    setProductSearch({ ...productSearch });
  };

  const searchAllProductsHandler = () => {
    setProductSearch({
      ...productSearch,
      page: 1,
      productCollection: undefined,
    });
  };

  const searchProductHandler = () => {
    productSearch.search = searchText;
    setProductSearch({ ...productSearch });
  };

  const paginationHandler = (e: ChangeEvent<any>, value: number) => {
    productSearch.page = value;
    setProductSearch({ ...productSearch });
  };

  const chooseProductHandler = (id: string) => {
    history.push(`/shop/${id}`);
  };

  const sortingClickHandler = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
    setSortingOpen(true);
  };

  const sortingCloseHandler = () => {
    setSortingOpen(false);
    setAnchorEl(null);
  };

  const sortingHandler = (e: React.MouseEvent<HTMLLIElement>) => {
    switch (e.currentTarget.id) {
      case "new":
        setProductSearch({ ...productSearch, order: "createdAt" });
        setFilterSortName("New");
        break;
      case "price":
        setProductSearch({ ...productSearch, order: "productDisPrice" });
        setFilterSortName("Price");
        break;
      case "views":
        setProductSearch({ ...productSearch, order: "productViews" });
        setFilterSortName("Views");
    }
    setSortingOpen(false);
    setAnchorEl(null);
  };

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className="product-category">
              <Button
                variant="contained"
                color={
                  productSearch.productCollection !== ProductCollection.MEN &&
                  productSearch.productCollection !== ProductCollection.WOMEN &&
                  productSearch.productCollection !== ProductCollection.KIDS &&
                  productSearch.productCollection !== ProductCollection.SHOES
                    ? "primary"
                    : "secondary"
                }
                onClick={searchAllProductsHandler}
              >
                All
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.MEN
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.MEN)}
              >
                Men
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.WOMEN
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.WOMEN)}
              >
                Women
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.KIDS
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.KIDS)}
              >
                Kids
              </Button>
              <Button
                variant="contained"
                color={
                  productSearch.productCollection === ProductCollection.SHOES
                    ? "primary"
                    : "secondary"
                }
                onClick={() => searchCollectionHandler(ProductCollection.SHOES)}
              >
                Shoes
              </Button>
            </Stack>
            <Stack className="single-search">
              <input
                type={"search"}
                className="single-search-input"
                name={"singleResearch"}
                placeholder={"Type here"}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") searchProductHandler();
                }}
              />
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"single-button-search"}
                onClick={searchProductHandler}
              >
                search
                <SearchIcon />
              </Button>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Box className="top-text">Collections</Box>

            <Box className="product-sort">
              <span>Sort By</span>
              <div>
                <Button
                  onClick={sortingClickHandler}
                  endIcon={<KeyboardArrowDownRoundedIcon />}
                >
                  {filterSortName}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={sortingOpen}
                  onClose={sortingCloseHandler}
                >
                  <MenuItem
                    onClick={sortingHandler}
                    id={"new"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    New
                  </MenuItem>
                  <MenuItem
                    onClick={sortingHandler}
                    id={"price"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    Price
                  </MenuItem>
                  <MenuItem
                    onClick={sortingHandler}
                    id={"views"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    Views
                  </MenuItem>
                </Menu>
              </div>
            </Box>

            <Stack className="products-wapper">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Stack
                      key={product._id}
                      className="product-card"
                      onClick={() => chooseProductHandler(product._id)}
                    >
                      <Stack
                        className="product-img"
                        sx={{
                          background: `url(${imagePath})`,
                        }}
                      >
                        <Button
                          className="shop-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            onAdd({
                              _id: product._id,
                              quantity: 1,
                              name: product.productName,
                              orgPrice: product.productOrgPrice,
                              disPrice: product.productDisPrice,
                              size: product.productSize,
                              kidsSize: product.productKidsSize,
                              shoeSize: product.productShoeSize,
                              collection: product.productCollection,
                              image: product.productImages[0],
                            });
                          }}
                        >
                          <img src={"/icons/shopping-cart.svg"} alt="" />
                        </Button>
                      </Stack>
                      <Box className="product-desc">
                        <Box className="product-desc-top">
                          <span className="product-title">
                            {product.productName}
                          </span>
                          <div style={{ display: "flex" }}>
                            <div className="product-price">
                              ${product.productOrgPrice}
                            </div>
                            <div className="product-price1">
                              ${product.productDisPrice}
                            </div>
                          </div>
                        </Box>
                        <Box className="product-desc-top">
                          <span className="product-type">
                            {product.productCollection}
                          </span>

                          <div className="product-view">
                            <RemoveRedEyeIcon
                              sx={{
                                color: "gray",
                                marginRight: "2px",
                                marginTop: "2px",
                                fontSize: "18px",
                              }}
                            />
                            {product.productViews}
                          </div>
                        </Box>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Product are not aviable!</Box>
              )}
            </Stack>
          </Stack>
          <Stack className="pagination-section">
            <Pagination
              count={
                products.length !== 0
                  ? productSearch.page + 1
                  : productSearch.page
              }
              page={productSearch.page}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIos,
                    next: ArrowForwardIos,
                  }}
                  {...item}
                  color="secondary"
                />
              )}
              onChange={paginationHandler}
            />
          </Stack>
        </Stack>
      </Container>

      <div className="branch-wrapper">
        <Box className="branch-text">Our Branchs</Box>
        <Stack className={"branch-main"}>
          <Swiper
            className={"branch-info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{
            //   el: ".swiper-pagination",
            //   clickable: true,
            // }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            <SwiperSlide className={"branch-info-frame"}>
              <div className={"branch-img"}>
                <img src="/img/store1.jpg" className={"branch-img"} alt="" />
              </div>
              <Box className={"branch-desc"}>
                <strong>NEXTON</strong>
                <p className={"text-desc"}>
                  {" "}
                  This Branch is one of the best seller.{" "}
                </p>
                <div className={"branch-info-main"}>
                  <img src={"/icons/location.svg"} alt="" />
                  London, United Kingdom
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide className={"branch-info-frame"}>
              <div className={"branch-img"}>
                <img src="/img/store2.jpg" className={"branch-img"} alt="" />
              </div>
              <Box className={"branch-desc"}>
                <strong>NEXTON</strong>
                <p className={"text-desc"}>
                  {" "}
                  This Branch has more costumer than other branch.{" "}
                </p>
                <div className={"branch-info-main"}>
                  <img src={"/icons/location.svg"} alt="" />
                  Tashkent, Uzbekistan
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide className={"branch-info-frame"}>
              <div className={"branch-img"}>
                <img src="/img/store3.jpg" className={"branch-img"} alt="" />
              </div>
              <Box className={"branch-desc"}>
                <strong>NEXTON</strong>
                <p className={"text-desc"}>
                  {" "}
                  This Branch has the most expansive collections.{" "}
                </p>
                <div className={"branch-info-main"}>
                  <img src={"/icons/location.svg"} alt="" />
                  Dubai, United Arab Emirates
                </div>
              </Box>
            </SwiperSlide>
            <SwiperSlide className={"branch-info-frame"}>
              <div className={"branch-img"}>
                <img src="/img/store4.jpg" className={"branch-img"} alt="" />
              </div>
              <Box className={"branch-desc"}>
                <strong>NEXTON</strong>
                <p className={"text-desc"}>
                  {" "}
                  There are the most new fashion collections in this brand.{" "}
                </p>
                <div className={"branch-info-main"}>
                  <img src={"/icons/location.svg"} alt="" />
                  Rim, Italy
                </div>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Stack>
      </div>
    </div>
  );
}
