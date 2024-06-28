import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewFashion } from "./selector";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

SwiperCore.use([Autoplay, Navigation, Pagination]);

/** REDUX SLICE & SELECTOR **/
const NewFashionRetriever = createSelector(
  retrieveNewFashion,
  (newFashion) => ({ newFashion })
);

export default function NewFashion() {
  const { newFashion } = useSelector(NewFashionRetriever);

  return (
    <div className={"fashion-frame"}>
      <Stack className={"fashion-main"}>
        <Box className={"category-title"}>
          <span>New Fashion</span>
        </Box>

        <Swiper
          className={"fashion-info swiper-wrapper"}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: true,
          }}
        >
          {newFashion.length !== 0 ? (
            newFashion.map((product: Product) => {
              const imagePath = `${serverApi}/${product.productImages[0]}`;
              return (
                <SwiperSlide key={product._id} className={"fashion-info-frame"}>
                  <div className={"fashion-img"}>
                    <img src={imagePath} className={"fashion-img"} alt="" />
                  </div>

                  <Box className={"fashion-desc"}>
                    <div>
                      <Typography className={"fashion-desc-title"}>
                        {product.productName}
                      </Typography>
                      <Typography className={"fashion-desc-type"}>
                        {product.productCollection}
                      </Typography>
                    </div>

                    <div>
                      <Typography className={"fashion-desc-price"}>
                        $ {product.productDisPrice}
                      </Typography>
                      <Typography className={"fashion-desc-views"}>
                        <VisibilityIcon
                          sx={{
                            fontSize: 22,
                            marginLeft: "5px",
                          }}
                        />
                        {product.productViews}
                      </Typography>
                    </div>
                  </Box>
                </SwiperSlide>
              );
            })
          ) : (
            <Box className="no-data">New Fashion is not available!</Box>
          )}
        </Swiper>
        <Box className={"prev-next-frame"}>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-prev"}
            alt=""
          />
          <div className={"dot-frame-pagination swiper-pagination"}></div>
          <img
            src={"/icons/arrow-right.svg"}
            className={"swiper-button-next"}
            style={{ transform: "rotate(-180deg)" }}
            alt=""
          />
        </Box>
      </Stack>
    </div>
  );
}
