import React from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import '../css/app.css';

function App() {
  return (
    <Container maxWidth="sm">
      <Stack flexDirection={"column"}>
        <Box sx={{my: 4}}>
          <Typography variant='h4' component={"h4"}>
            Create React App on Typescript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
           <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
