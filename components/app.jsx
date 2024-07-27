import {
  AppBar,
  CssBaseline,
  Paper,
  Stack,
  SvgIcon,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import {StrictMode} from "react";
import Logo from "../images/logo.svg?react";
import {Footer} from "./footer.jsx";
import {Form} from "./form.jsx";

export const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <Stack gap={2} p={2} alignItems="center">
            <SvgIcon inheritViewBox component={Logo} sx={logoStyle} />
            <Form />
          </Stack>
        </Paper>
        <AppBar position="fixed" sx={appBarStyle}>
          <Toolbar variant="dense">
            <Footer />
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </StrictMode>
  );
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const logoStyle = {
  height: 64,
  width: 64,
};

const appBarStyle = {
  bottom: 0,
  top: "auto",
};
