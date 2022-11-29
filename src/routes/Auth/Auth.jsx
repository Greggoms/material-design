import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <Box my={5}>
      <form onSubmit={handleSubmit}>
        <Paper sx={{ width: "30rem", padding: "2rem", margin: "0 auto" }}>
          <Typography align="center" mb={2} variant="h3">
            {isRegister ? "Register" : "Login"}
          </Typography>
          <Stack gap={2} width="100%" maxWidth="30rem">
            {isRegister && (
              <Grid2 container alignContent="space-between">
                <Grid2 xs={12} sm={6}>
                  <FormControl required={true}>
                    <InputLabel htmlFor="firstName">First Name</InputLabel>
                    <Input id="firstName" placeholder="Bruce" />
                  </FormControl>
                </Grid2>
                <Grid2 xs={12} sm={6}>
                  <FormControl required={true}>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <Input id="lastName" placeholder="Wayne" />
                  </FormControl>
                </Grid2>
              </Grid2>
            )}
            <FormControl required={true}>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" placeholder="your@email.com" />
            </FormControl>
            <FormControl required={true}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            {isRegister && (
              <FormControl required={true}>
                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                <Input id="confirmPassword" type="password" />
              </FormControl>
            )}
            <Button
              sx={{ marginTop: "2rem" }}
              type="submit"
              variant="contained"
            >
              {isRegister ? "Register" : "Login"}
            </Button>
          </Stack>
          <Box mt={4} sx={{ display: "flex", alignItems: "center" }}>
            <Typography>
              {isRegister ? "Already Have an account?" : "Need an account?"}
            </Typography>
            <Button
              variant="text"
              onClick={() => setIsRegister((prev) => !prev)}
            >
              {isRegister ? "Login" : "Register"}
            </Button>
          </Box>
        </Paper>
      </form>
    </Box>
  );
};

export default Auth;
