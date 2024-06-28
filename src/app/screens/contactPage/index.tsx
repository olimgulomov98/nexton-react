import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import "../../../css/contact.css";

export default function HelpPage() {
  return (
    <div className={"help-page"}>
      <Container className={"help-container"}>
        <Stack className={"admin-letter-box"}>
          <Stack className={"admin-letter-container"}>
            <Box className={"admin-letter-frame"}>
              <span>Contact us!</span>
              <p>Fill out below form to send a message!</p>
            </Box>
            <form action={"#"} method={"POST"} className={"admin-letter-frame"}>
              <div className={"admin-input-box"}>
                <label>Your name</label>
                <input
                  type={"text"}
                  name={"memberNick"}
                  placeholder={"Type your name here"}
                />
              </div>
              <div className={"admin-input-box"}>
                <label>Your email</label>
                <input
                  type={"text"}
                  name={"memberEmail"}
                  placeholder={"Type your email here"}
                />
              </div>
              <div className={"admin-input-box"}>
                <label>Message</label>
                <textarea
                  name={"memberMsg"}
                  placeholder={"Your message"}
                ></textarea>
              </div>
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                sx={{ mt: "30px" }}
              >
                <Button type={"submit"} variant="contained">
                  Send
                </Button>
              </Box>
            </form>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
