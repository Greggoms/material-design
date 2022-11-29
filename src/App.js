import { Outlet } from "react-router";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Nav from "./components/Nav/Nav";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ height: "100%" }}>
        <Nav />
        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;
