import React from "react";
import { Box, Stack } from "@mui/material";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const newFashion = [
  { productName: "Cutlet", imagePath: "/img/image.png" },
  { productName: "Kebab", imagePath: "/img/image1.png" },
  { productName: "Kebab", imagePath: "/img/image2.png" },
  { productName: "Lavash", imagePath: "/img/image3.png" },
];

export default function NewFashion() {
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
          {newFashion.map((value, number) => {
            return (
              <SwiperSlide key={number} className={"fashion-info-frame"}>
                <div className={"fashion-img"}>
                  <img src={value.imagePath} className={"fashion-img"} alt="" />
                </div>

                <Box className={"fashion-desc"}>
                  <div>
                    <Typography className={"fashion-desc-title"}>
                      {value.productName}
                    </Typography>
                    <Typography className={"fashion-desc-type"}>Men</Typography>
                  </div>

                  <div>
                    <Typography className={"fashion-desc-price"}>
                      $ 12
                    </Typography>
                    <Typography className={"fashion-desc-views"}>
                      20
                      <VisibilityIcon
                        sx={{
                          fontSize: 22,
                          marginLeft: "5px",
                        }}
                      />
                    </Typography>
                  </div>
                </Box>
              </SwiperSlide>
            );
          })}
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
