import styled from "@emotion/styled";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar, Box, Typography, Popover } from "@mui/material";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { useState } from "react";

function HeaderIcon({ Icon, text }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;
  const router = useRouter();

  const isLoggedIn = Cookies.get("loggedin");
  const handleClick = (e) => {
    if (isLoggedIn && text === "User") {
      handleOpen(e);
    } else if (text === "Login") {
      router.push("/login");
    } else return;
  };

  const handleLogout = () => {
    Cookies.remove("loggedin");
    router.push("/login");
  };

  return (
    <>
      <HeaderIconContainer onClick={handleClick}>
        <Box>
          <Avatar>{Icon}</Avatar>
          <Typography>{text}</Typography>
        </Box>
        {/* {text === "Login" && <ExpandMoreIcon />} */}
      </HeaderIconContainer>
      <Popover
        // id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: "272px",
            height: "446px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "22px 62px 33px 30px",
          }}
        >
          <PopupOptions>My Orders</PopupOptions>
          <PopupOptions>My Profile</PopupOptions>
          <PopupOptions>Company Profile</PopupOptions>
          <PopupOptions>Bank Details</PopupOptions>
          <PopupOptions>Add Team Members</PopupOptions>
          <PopupOptions>My Deals</PopupOptions>
          <PopupOptions>Feedback</PopupOptions>
          <PopupOptions>Change Password</PopupOptions>
          <PopupOptions onClick={handleLogout}>Logout</PopupOptions>
        </Box>
      </Popover>
    </>
  );
}

export default HeaderIcon;

const HeaderIconContainer = styled(Box)`
  cursor: pointer;
`;

const PopupOptions = styled(Typography)`
  cursor: pointer;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
`;
