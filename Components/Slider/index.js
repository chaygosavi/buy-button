import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Cookies from "js-cookie";
import React from "react";
import { NoSsr } from "@mui/material";
import Image from "next/image";

const Slider = () => {
  const isLoggedIn = Cookies.get("loggedin");

  return (
    <SliderContainer
      sx={{ width: "100%", height: "480px", position: "relative" }}
    >
      <NoSsr>
        {isLoggedIn && (
          <SelectBox>
            <SelectOptions>Home</SelectOptions>
            <SelectOptions>Phone</SelectOptions>
            <SelectOptions>Accessories</SelectOptions>
            <SelectOptions>Used</SelectOptions>
            <SelectOptions>Consumer</SelectOptions>
            <SelectOptions>Support</SelectOptions>
          </SelectBox>
        )}
      </NoSsr>
      <Image
        src="https://images.unsplash.com/photo-1660893669101-841cc1b0aea3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        layout="fill"
      />
    </SliderContainer>
  );
};

export default Slider;

const SliderContainer = styled(Box)``;

const SelectBox = styled(Box)`
  margin-left: 100px;
  width: 1240px;
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background: #fff;
  border: 1px solid #000000;
  z-index: 9;
`;
const SelectOptions = styled(Typography)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;
