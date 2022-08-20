import styled from "@emotion/styled";
import { Typography, Box, Stack } from "@mui/material";
import Link from "next/link";
import React from "react";
import LargeSquareCard from "../CardComponents/LargeSquareCard";
import SmallSquareCard from "../CardComponents/SmallSquareCard";

function ServicesForYou() {
  const ServicesForYouContainer = styled(Box)`
    margin-top: 50px;
    width: 1240px;
    margin: 0 auto;

  `;

  const Heading = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 20px;
  `;
  return (
    <ServicesForYouContainer disableGutters maxWidth="lg">
      <Heading>
        <Typography fontSize={30}>Services For You</Typography>
        <Link href={"#"}>
          <Typography>See All</Typography>
        </Link>
      </Heading>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Stack justifyContent={"space-between"} height={"100%"}>
            <Box>
              <Typography variant="h5">
                Sshbdjhbs sdbcsdcby sdbhsb d shdc bhd bbsb shd bsh
              </Typography>
              <Typography variant="span">
                Sshbdjhbs sdbcsdcby sdbhsb d shdc bhd
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: 20,
              }}
            >
              <SmallSquareCard />
              <Box sx={{ margin: "0 40px" }}>
                <SmallSquareCard />
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ marginRight: "82px" }}>
          <LargeSquareCard />
        </Box>
      </Box>
    </ServicesForYouContainer>
  );
}

export default ServicesForYou;
