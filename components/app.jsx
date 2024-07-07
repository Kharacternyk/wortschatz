import {
  CssBaseline,
  Stack,
  SvgIcon,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {StrictMode} from "react";
import Logo from "../images/logo.svg?react";
import {Form} from "./form.jsx";

export const App = () => {
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack gap={2} px={2} py={2} alignItems="center">
          <SvgIcon inheritViewBox component={Logo} sx={logoStyle} />
          <Form />
        </Stack>
      </ThemeProvider>
    </StrictMode>
  );
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ec872c",
    },
    secondary: {
      main: "#cc5b02",
    },
    background: {
      default: "#33015f",
    },
  },
});

const logoStyle = {
  height: 64,
  width: 64,
};
