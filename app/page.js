import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      bgcolor={"#000000"}
      display="flex"
    >
      {/*CHAT BOX*/}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width={"20%"}
        height={"60%"}
        bgcolor={"#ffffff"}
        position={"fixed"}
        bottom={0}
        right={"1%"}
        sx={{
          borderTopLeftRadius: "30px",
          borderTopRightRadius: "30px"
        }}
      >
        {/*HEADER*/}
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          height={"10%"}
          borderBottom={"#222222 2px solid"}
          sx={{
            borderTopLeftRadius: "30px",
            borderTopRightRadius: "30px"
          }}
        >
          <Typography
            variant={"h5"}
            color={"#000000"}
            textAlign={"center"}
            paddingTop={"10px"}
            fontFamily={"Roboto"}
            fontStyle={"italic"}
          >
            Customer Service Representative
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
