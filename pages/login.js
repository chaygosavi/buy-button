import styled from "@emotion/styled";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Cookies from "js-cookie";

function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const credentials = {
    username: "chetan@thetechclan.com",
    password: "1234",
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (
      credentials.username === username &&
      credentials.password === password
    ) {
      Cookies.set("loggedin", "true");
      router.push("/dashboard");
    } else {
      alert("Wrong username or password");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <main style={{ height: "100vh", display: "flex", alignItems: "center" }}>
      <SignInContainer>
        <Header>Sign In</Header>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form style={{ width: "90%" }} onSubmit={handleLogin}>
            <Label>Username</Label>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Enter Your Username"
              name="name"
              autoComplete="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Label>Password</Label>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Grid container>
              <Grid item marginLeft={"auto"}>
                <Link href="/forgot-password" variant="body2">
                  {"Forgot Password ?"}
                </Link>
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "45%", display: "block", margin: "20px auto" }}
            >
              Next
            </Button>
            <Typography textAlign={"center"}>Or</Typography>
            <Button
              variant="contained"
              sx={{ width: "45%", display: "block", margin: "20px auto" }}
            >
              Register
            </Button>
          </form>
        </Box>
      </SignInContainer>
    </main>
  );
}

export default login;

const SignInContainer = styled(Stack)`
  width: 900px;
  height: 658px;
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

const Label = styled(Typography)`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 41px;
`;
