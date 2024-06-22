import { Box, Button, Container, Stack } from "@mui/material";

export default function Article() {
  return (
    <Container className="article-frame">
      <Stack flexDirection={"row"}>
        <Box className={"article-right"}>
          <p>100% Original Products</p>
          <h1>The All New Fashion Collection Items</h1>
          <p>Starting from: $59.99</p>
          <Button className={"btn"} style={{ background: "#111828" }}>
            <a href="/shop">Shop now</a>
          </Button>
        </Box>
        <Box className={"article-left"}></Box>
      </Stack>
    </Container>
  );
}
