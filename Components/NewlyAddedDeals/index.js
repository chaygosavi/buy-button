import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import React from "react";
import MediumCard from "../CardComponents/MediumCard";
import SmallCard from "../CardComponents/SmallCard";

function NewlyAddedDeals({ data }) {
  const NewlyAddedDealsContainer = styled(Box)`
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
    <NewlyAddedDealsContainer>
      <Heading>
        <Typography fontSize={30}>Newly Added Deals</Typography>
        <Link href={"#"}>
          <Typography>See All</Typography>
        </Link>
      </Heading>
      <Grid container spacing={3} mb={3}>
        {data.slice(0, 3).map((ele) => (
          <Grid item md={4}>
            <SmallCard product={ele} />
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={2}>
        {data.slice(6, 8).map((ele) => (
          <Grid item md={6}>
            <MediumCard product={ele} />
          </Grid>
        ))}
      </Grid>
    </NewlyAddedDealsContainer>
  );
}

export default NewlyAddedDeals;
