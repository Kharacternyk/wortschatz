import {
  CssBaseline,
  Paper,
  Stack,
  SvgIcon,
  ThemeProvider,
  createTheme
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
        <Paper elevation={4}>
          <Stack gap={2} p={2} alignItems="center">
            <SvgIcon inheritViewBox component={Logo} sx={logoStyle} />
            <Form />
          </Stack>
        </Paper>
        <Footer />
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
