import {
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  SvgIcon,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {StrictMode, useState} from "react";
import Logo from "../images/logo.svg?react";

export const App = () => {
  const [article, setArticle] = useState("die");
  const [word, setWord] = useState("Apfel");

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack gap={2} px={2} py={2} alignItems="center">
          <SvgIcon inheritViewBox component={Logo} />
          <Typography>
            Wie heißt
            <Typography color="primary" component="span">
              <span lang="en-us"> apple </span>
            </Typography>
            auf Deutsch?
          </Typography>
          <RadioGroup row value={article} onChange={makeListener(setArticle)}>
            {["der", "die", "das"].map(makeRadio(article))}
          </RadioGroup>
          <RadioGroup row value={word} onChange={makeListener(setWord)}>
            {["Apfel", "Geschirrreiniger", "Kühlschrank"].map(makeRadio(word))}
          </RadioGroup>
        </Stack>
      </ThemeProvider>
    </StrictMode>
  );
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f26225",
    },
    secondary: {
      main: "#d32036",
    },
  },
});

const makeRadio = (selectedValue) => (value) => {
  const label =
    value == selectedValue ? (
      <Typography color="primary">{value}</Typography>
    ) : (
      value
    );

  return (
    <FormControlLabel
      value={value}
      control={radio}
      label={label}
      disableTypography
    />
  );
};

const radio = <Radio />;

const makeListener = (setter) => (event) => setter(event.target.value);
