import React from "react";
import { Box, Container, Stack } from "@mui/material";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background: #111828;
  background-size: cover;
`;

export default function Footer() {

  return (
    <Footers>
      <Container>
        <Stack flexDirection={"row"} justifyContent={"space-around"} sx={{ mt: "50px" }}>
          <Stack flexDirection={"column"}>
            <Box sx={{mb: "15px"}}>
              <img width={"100px"} src={"/icons/nexton.svg"} alt="nexton-logo"/>
            </Box>
            <Box className={"icons-logo"}>
              <img src={"/icons/facebook.svg"} alt="facebook" />
              <span>Facebook</span>
            </Box>
            <Box className={"icons-logo"}>
              <img src={"/icons/youtube.svg"} alt="youtube" />
              <span>Youtube</span>
            </Box>
            <Box className={"icons-logo"}>
              <img src={"/icons/telegram.svg"} alt="telegram" />
              <span>Telegram</span>
            </Box>
             <Box className={"icons-logo"}>
              <img src={"/icons/twitter.svg"} alt="twitter" />
              <span>Twitter</span>
            </Box>
          </Stack>
          <Stack flexDirection={"column"} justifyContent={"space-between"}>
            <Box className={"foot-category-title"}>Getting started</Box>
            <Box className={"foot-category-section"}>Release Notes</Box>
            <Box className={"foot-category-section"}>Upgrade Guide</Box>
            <Box className={"foot-category-section"}>Browser Support</Box>
            <Box className={"foot-category-section"}>Dark Mode</Box>
          </Stack>
          <Stack flexDirection={"column"} justifyContent={"space-between"}>
            <Box className={"foot-category-title"}>Explore</Box>
            <Box className={"foot-category-section"}>Prototyping</Box>
            <Box className={"foot-category-section"}>Design systems</Box>
            <Box className={"foot-category-section"}>Pricing</Box>
            <Box className={"foot-category-section"}>Security</Box>
          </Stack>
          <Stack flexDirection={"column"} justifyContent={"space-between"}>
            <Box className={"foot-category-title"}>Community</Box>
            <Box className={"foot-category-section"}>Discussion Forums</Box>
            <Box className={"foot-category-section"}>Code of Conduct</Box>
            <Box className={"foot-category-section"}>Contributing</Box>
            <Box className={"foot-category-section"}>API Reference</Box>
          </Stack>
          <Stack flexDirection={"column"} justifyContent={"space-between"}>
            <Box className={"foot-category-title"}>Find us</Box>
            <Box className={"find-us"}>
              <span>L.</span>
              <div>Downtown, Dubai</div>
            </Box>
            <Box className={"find-us"}>
              <span>P.</span>
              <div>+971 4 553 7777</div>
            </Box>
            <Box className={"find-us"}>
              <span>E.</span>
              <div>nexton@gmail.com</div>
            </Box>
            <Box className={"find-us"}>
              <span>H.</span>
              <div>Visit 24 hours</div>
            </Box>            
          </Stack>      
        </Stack>
        <Stack
          style={{ border: "1px solid #C5C8C9", width: "100%", opacity: "0.2" }}
          sx={{ mt: "50px" }}
        ></Stack>
        <Stack flexDirection={"row"} justifyContent={"space-between"}>
          <Stack className={"copyright-txt"}>Nexton eCommerce.© 2024</Stack>
          <Stack flexDirection={"row"} sx={{mt: "15px"}}>
            <Box>
              <img src="/icons/visa.svg" alt="visa-logo" />
            </Box>
            <Box>
              <img src="/icons/paypal.svg" alt="paypal-logo" />
            </Box>
            <Box>
              <img src="/icons/stripe.svg" alt="stripe-logo" />
            </Box>
            <Box>
              <img src="/icons/verisign.svg" alt="verisign-logo" />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Footers>
  );
}
