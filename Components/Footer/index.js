import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  const FooterContainer = styled(Box)`
    margin-top: 50px;
    height: 370px;
    margin-bottom: 50px;
    width: 1240px;
    margin: 0 auto;

  `;

  const LinkContainer = styled(Box)`
    width: 274px;
    border: 1px solid;
    height: 80px;
    margin-top: 37px;
  `;

  const Heading = styled(Typography)`
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 31px;
  `;

  return (
    <footer>
      <FooterContainer
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "36px",
        }}
      >
        <Box>
          <Heading>About Us</Heading>
          <LinkContainer></LinkContainer>
        </Box>
        <Box>
          <Heading>Customer Services</Heading>
          <LinkContainer></LinkContainer>
        </Box>
        <Box>
          <Heading>Important Links</Heading>
          <LinkContainer></LinkContainer>
        </Box>
        <Box>
          <Heading>Contact Us</Heading>
          <LinkContainer></LinkContainer>
        </Box>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
