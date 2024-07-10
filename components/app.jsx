import {
  CssBaseline,
  Paper,
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
        <Paper sx={paperStyle}>
          <Stack gap={2} px={2} py={2} alignItems="center">
            <SvgIcon inheritViewBox component={Logo} sx={logoStyle} />
            <Form />
          </Stack>
        </Paper>
      </ThemeProvider>
    </StrictMode>
  );
};

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const paperStyle = {
  m: 2,
};

const logoStyle = {
  height: 64,
  width: 64,
};
