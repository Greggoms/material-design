import { Link } from "react-router-dom";
import { AppBar, Toolbar, Stack, Typography, Button } from "@mui/material";
import { NavContainer } from "./styles";

const Nav = () => {
  const user = null;

  const handleLogout = () => {
    console.log(`Logged out`);
  };

  return (
    <NavContainer>
      <AppBar position="sticky">
        <Toolbar className="nav-bar">
          <Link to="/">
            <Typography variant="h4">FakeHQ</Typography>
          </Link>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Link to="profile">
              <Typography>Profile</Typography>
            </Link>
            <Link to="documents">
              <Typography>Documents</Typography>
            </Link>
            <Link to="faq">
              <Typography>Faq</Typography>
            </Link>
            <Link to="admin">
              <Typography>Admin</Typography>
            </Link>
            {!user && (
              <Link to="auth">
                <Typography>Login/Register</Typography>
              </Link>
            )}
            {user && (
              <Button
                onClick={handleLogout}
                variant="contained"
                color="secondary"
              >
                Logout
              </Button>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </NavContainer>
  );
};

export default Nav;
