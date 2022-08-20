import {
  Typography,
  InputBase,
  Button,
  Avatar,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";

import PersonIcon from "@mui/icons-material/Person";
import CommentIcon from "@mui/icons-material/Comment";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useRouter } from "next/router";
import HeaderIcon from "../HeaderIcons";

function Header() {
  const router = useRouter();

  return (
  
  <Box sx={{width: '1240px', margin: '0 auto'}}>
      <Stack direction={"row"} justifyContent="space-between">
        <Box>
          <SelectContainer size="small">
            <InputLabel>Location</InputLabel>
            <Select label="Location">
              <MenuItem value={1}>India</MenuItem>
              <MenuItem value={2}>USA</MenuItem>
              <MenuItem value={3}>UK</MenuItem>
            </Select>
          </SelectContainer>
          <SelectContainer size="small">
            <InputLabel>Time</InputLabel>
            <Select label="Location">
              <MenuItem value={1}>India</MenuItem>
              <MenuItem value={2}>USA</MenuItem>
              <MenuItem value={3}>UK</MenuItem>
            </Select>
          </SelectContainer>
        </Box>
        <SelectContainer size="small">
          <InputLabel>English</InputLabel>
          <Select label="English">
            <MenuItem value={1}>India</MenuItem>
            <MenuItem value={2}>USA</MenuItem>
            <MenuItem value={3}>UK</MenuItem>
          </Select>
        </SelectContainer>
      </Stack>
      <Stack direction={"row"} justifyContent="space-between" p={"40px 0"}>
        <SearchContainer>
          <Typography>Buy Button.in</Typography>
          <Search placeholder="Product Search" />
        </SearchContainer>
        <ButtonContainer>
          <Box display={"flex"} gap={3}>
            <Button variant="outlined">Buy Stock</Button>
            <Button variant="outlined">Sell Stock</Button>
          </Box>
          <Box sx={{ display: "flex", gap: "32.5px" }}>
            {router.pathname !== "/" && (
              <>
                <HeaderIcon Icon={<NotificationsNoneIcon />} text="Alerts" />
                <HeaderIcon Icon={<CommentIcon />} text="Chats" />
              </>
            )}
            <HeaderIcon
              Icon={<PersonIcon />}
              text={router.pathname === "/" ? "Login" : "User"}
            />
          </Box>
        </ButtonContainer>
      </Stack>
    </Box>
  );
}

export default Header;

const SearchContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  p {
    font-size: 30px;
  }
`;

const ButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Search = styled(InputBase)`
  font-size: 25px;
  width: 400px;
  border: 1px solid;
  border-radius: 10px;
  padding: 0 30px;
`;

const SelectContainer = styled(FormControl)`
  width: 160px;
  border-radius: 20px;
`;

// function Header() {
//   // const Header = styled(Stack)`
//   //   padding: 20px;
//   // `;
//   const SearchContainer = styled(Box)`
//     display: flex;
//     align-items: center;
//     gap: 20px;
//     p {
//       font-size: 30px;
//     }
//   `;

//   const ButtonContainer = styled(Box)`
//     display: flex;
//     align-items: center;
//     gap: 40px;
//   `;

//   const Search = styled(InputBase)`
//     font-size: 25px;
//     width: 400px;
//     border: 1px solid;
//     border-radius: 10px;
//     padding: 0 30px;
//   `;

//   const TopComponent = styled(Box)`
//     width: 100vw;
//     display: flex;
//     justify-content: space-between;
//     padding: 0 100px;
//   `;

//   const Label = styled(InputLabel)`
//     height: 100%;
//   `;

//   const SelectContainer = styled(FormControl)`
//     width: 140px;
//     border-radius: 20px;
//   `;

//   return (
//     <>
//       <TopComponent>
//         <SelectContainer size="small">
//           <Label>Location</Label>
//           <Select
//             shrink={false}
//             // value={Location}
//             label="Location"
//           >
//             <MenuItem value={1}>India</MenuItem>
//             <MenuItem value={2}>USA</MenuItem>
//             <MenuItem value={3}>UK</MenuItem>
//           </Select>
//         </SelectContainer>
//         <SelectContainer size="small"></SelectContainer>

//         <SelectContainer size="small">
//           <Label id="demo-simple-select-label">English</Label>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             label="Language"
//           >
//             <MenuItem value={1}>Marathi</MenuItem>
//             <MenuItem value={2}>Hindi</MenuItem>
//             <MenuItem value={3}>English</MenuItem>
//           </Select>
//         </SelectContainer>
//       </TopComponent>
//       <Box>
//         <SearchContainer>
//           <Typography>Buy Button.in</Typography>
//           <Search placeholder="Product Search" />
//         </SearchContainer>
//         <ButtonContainer>
//           <Box>
//             <Button variant="contained">Buy Stock</Button>
//             <Button variant="contained">Sell Stock</Button>
//           </Box>
//           <Box>
//             <Avatar>
//               <PersonIcon />
//             </Avatar>
//             <Typography>Login</Typography>
//           </Box>
//         </ButtonContainer>
//       </Box>
//     </>
//   );
// }

// export default Header;
