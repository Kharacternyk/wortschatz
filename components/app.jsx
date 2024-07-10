import {
  CssBaseline,
  Link,
  Paper,
  Stack,
  SvgIcon,
  ThemeProvider,
  Typography,
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
        <Stack
          gap={1}
          p={2}
          alignItems="stretch"
          height="100vh"
          justifyContent="space-between"
        >
          <Paper>
            <Stack gap={2} p={2} alignItems="center">
              <SvgIcon inheritViewBox component={Logo} sx={logoStyle} />
              <Form />
            </Stack>
          </Paper>
          <Typography align="center" variant="caption">
            ©{" "}
            <Link underline="hover" href="https://vinnich.uk">
              https://vinnich.uk
            </Link>{" "}
            (diese Seite) <br />©{" "}
            <Link underline="hover" href="https://frequencylists.blogspot.com/">
              https://frequencylists.blogspot.com/
            </Link>{" "}
            (die Wörter)
          </Typography>
        </Stack>
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
