import React, { useState } from "react";
import { Box, Button, Container, Menu, MenuItem, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Pagination from "@mui/material/Pagination";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";

SwiperCore.use([Autoplay, Navigation]);

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebak", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebak", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [sortingOpen, setSortingOpen] = useState(false);
  const [filterSortName, setFilterSortName] = useState("New");

  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className="avatar-big-box">
            <Stack className="product-category">
              <Button variant="contained" color="primary">
                All
              </Button>
              <Button variant="contained" color="secondary">
                Men
              </Button>
              <Button variant="contained" color="secondary">
                Women
              </Button>
              <Button variant="contained" color="secondary">
                Kids
              </Button>
              <Button variant="contained" color="secondary">
                Shoes
              </Button>
            </Stack>
            <Stack className="single-search">
              <input className="single-search-input" placeholder="Type here" />
              <Button
                variant="contained"
                color="secondary"
                className="single-button-search"
              >
                search
                <SearchIcon />
              </Button>
            </Stack>
          </Stack>

          <Stack className="list-category-section">
            <Box className="top-text">Collections</Box>
            <Box component={"div"} className={"right"}>
              <span>Sort by</span>
              <div>
                <Button
                  // onClick={sortingClickHandler}
                  endIcon={<KeyboardArrowDownRoundedIcon />}
                >
                  {filterSortName}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={sortingOpen}
                  // onClose={sortingCloseHandler}
                  sx={{ paddingTop: "5px" }}
                >
                  <MenuItem
                    id={"new"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    New
                  </MenuItem>
                  <MenuItem
                    id={"lowest"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    Lowest Price
                  </MenuItem>
                  <MenuItem
                    id={"highest"}
                    disableRipple
                    sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  >
                    Highest Price
                  </MenuItem>
                </Menu>
              </div>
            </Box>
            <Stack className="products-wapper">
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className="product-card">
                      <Stack
                        className="product-img"
                        sx={{
                          background: `url(${product.imagePath})`,
                        }}
                      >
                        <Button className="shop-btn">
                          <img src={"/icons/shopping-cart.svg"} alt="" />
                        </Button>
                        {/* <Button className="view-btn">
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: 20 ? "white" : "gray",
                              }}
                            />
                          </Badge>
                        </Button> */}
                      </Stack>
                      <Box className="product-desc">
                        <Box className="product-desc-top">
                          <span className="product-title">
                            {product.productName}
                          </span>
                          <div className="product-price">$18</div>
                        </Box>
                        <Box className="product-desc-top">
                          <span className="product-type">Men</span>

                          <div className="product-view">
                            <RemoveRedEyeIcon
                              color="secondary"
                              sx={{
                                marginRight: "2px",
                                marginTop: "2px",
                                fontSize: "18px",
                              }}
                            />
                            15
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
            <Pagination count={3} page={1} color="secondary" />
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
