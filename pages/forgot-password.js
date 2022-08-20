import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  Stack,
  Typography,
  TextField,
  Box,
  Button,
  Modal,
  InputBase,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  height: "307px",
  bgcolor: "background.paper",
  boxShadow: 24,
  background: "#FFFFFF",
  border: "1px solid #000000",
  borderRadius: "30px",
};

const ForgotPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const ForgotPasswordContainer = styled(Stack)`
    width: 900px;
    height: 444px;
    border: 1px solid #000000;
    border-radius: 30px;
    margin: 0 auto;
  `;
  const Header = styled(Typography)`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 41px;
    text-align: center;
    padding: 20px 0;
    border-bottom: 1px solid #000000;
  `;

  const HelperText = styled(Typography)`
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    margin-top: 20px;
  `;

  const OTPContainer = styled(Box)`
    margin: 30px auto 0 auto;
    width: 484px;
    height: 65px;
    display: flex;
    justify-content: space-between;
  `;
  const OTPBox = styled(Box)`
    width: 64px;
    height: 64px;
    background: #c4c4c4;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <main style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <ForgotPasswordContainer>
        <Header>Forgot Password</Header>
        <Box
          component="form"
          noValidate
          sx={{ width: "90%", margin: "86px auto 0 auto" }}
        >
          <TextField
            fullWidth
            label="Enter Your Username/ Email Address"
            autoComplete="current-password"
          />
          <HelperText>
            Check your Number that is register on this portal and confirm OTP
          </HelperText>
        </Box>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            width: "45%",
            display: "block",
            margin: "70px auto 0 auto",
            padding: "10px",
          }}
        >
          Next
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Header>OTP Verification</Header>
            <OTPContainer>
              <OTPBox>
                <InputBase />
              </OTPBox>
              <OTPBox>
                <InputBase />
              </OTPBox>
              <OTPBox>
                <InputBase />
              </OTPBox>
              <OTPBox>
                <InputBase />
              </OTPBox>
              <OTPBox>
                <InputBase />
              </OTPBox>
              <OTPBox>
                <InputBase />
              </OTPBox>
            </OTPContainer>
            <Button
              variant="contained"
              sx={{
                width: "45%",
                display: "block",
                margin: "37px auto 0px auto",
                padding: "10px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Modal>
      </ForgotPasswordContainer>
    </main>
  );
};

export default ForgotPassword;
