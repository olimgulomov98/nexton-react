import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularClothes } from "./selector";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

/** REDUX SLICE & SELECTOR **/
const popularClothesRetriever = createSelector(
  retrievePopularClothes,
  (popularClothes) => ({ popularClothes })
);

export default function PopularClothes() {
  const { popularClothes } = useSelector(popularClothesRetriever);

  return (
    <div className="popular-products-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Clothes</Box>
          <Stack className="cards-frame">
            {popularClothes.length !== 0 ? (
              popularClothes.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`;
                return (
                  <CssVarsProvider key={product._id}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={imagePath} alt="" />
                      </CardCover>
                      <CardCover className={"card-cover"} />
                      <CardContent sx={{ justifyContent: "flex-end" }}>
                        <Stack
                          flexDirection={"row"}
                          justifyContent={"space-between"}
                        >
                          <Typography
                            level="h2"
                            fontSize="lg"
                            textColor="#fff"
                            mb={1}
                          >
                            {product.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            {product.productViews}
                            <VisibilityIcon
                              sx={{ fontSize: 25, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </CssVarsProvider>
                );
              })
            ) : (
              <Box className="no-data">Popular Clothes are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
