import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";

const list = [
  { productName: "Lavash", imagePath: "/img/image.png" },
  { productName: "Cutlet", imagePath: "/img/image1.png" },
  { productName: "Kebab", imagePath: "/img/image2.png" },
  { productName: "Kebab", imagePath: "/img/image3.png" },
];

export default function PopularClothes() {
  return (
    <div className="popular-products-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Clothes</Box>
          <Stack className="cards-frame">
            {list.length !== 0 ? (
              list.map((ele, index) => {
                return (
                  <CssVarsProvider key={index}>
                    <Card className={"card"}>
                      <CardCover>
                        <img src={ele.imagePath} alt="" />
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
                            {ele.productName}
                          </Typography>
                          <Typography
                            sx={{
                              fontWeight: "md",
                              color: "neutral.300",
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            20
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
              <Box className="no-data">Popular Dishes is not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
