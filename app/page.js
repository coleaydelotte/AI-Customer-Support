import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bgcolor={"#000000"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Typography
        variant="h1"
        color={"#ffffff"}
      >
        Hello world!
      </Typography>
    </Box>
  );
}
