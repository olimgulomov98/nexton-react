import React from "react";
import { Box, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

const newFashion = [
  { productName: "Cutlet", imagePath: "/img/image.png" },
  { productName: "Kebab", imagePath: "/img/image1.png" },
  { productName: "Kebab", imagePath: "/img/image2.png" },
  { productName: "Lavash", imagePath: "/img/image3.png" },
];

export default function NewDishes() {
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">New Fashion</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newFashion.length !== 0 ? (
                newFashion.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <div className="product-sale">New Fashion</div>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>

                      <CardOverflow variant="soft" className="product-detail">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className={"title"}>
                              {ele.productName}
                            </Typography>
                            <Divider width="2" height="24" bg="#d9d9d9" />
                            <Typography className={"price"}>12$</Typography>
                          </Stack>
                          <Stack>
                            <Typography className={"views"}>
                              20
                              <VisibilityIcon
                                sx={{ fontSize: 20, marginLeft: "5px" }}
                              />
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
