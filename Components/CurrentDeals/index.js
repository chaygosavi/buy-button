import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import MediumCard from "../CardComponents/MediumCard";
import SmallCard from "../CardComponents/SmallCard";

function CurrentDeals({ data }) {
  const CurrentDealsContainer = styled(Box)`
    margin-top: 50px;
    width: 1240px;
    margin: 0 auto;

  `;

  const Heading = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  `;
  return (
    <CurrentDealsContainer disableGutters>
      <Heading>
        <Typography fontSize={30}>Current Deals</Typography>
        <Link href={"#"}>
          <Typography>See All</Typography>
        </Link>
      </Heading>
      <Box>
        <Grid container spacing={1} mb={3}>
          {data.slice(0, 5).map((ele) => (
            <Grid item md={2.4}>
              <SmallCard product={ele} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {data.slice(6, 9).map((ele) => (
            <Grid item md={4}>
              <MediumCard product={ele} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </CurrentDealsContainer>
  );
}

export default CurrentDeals;
