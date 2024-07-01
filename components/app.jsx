import {
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import {StrictMode, useState} from "react";

export const App = () => {
  const [article, setArticle] = useState("die");
  const [word, setWord] = useState("Apfel");

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Stack gap={2} px={2} py={2} alignItems="center">
          <Typography>
            Wie heißt
            <span lang="en-us"> apple </span>
            auf Deutsch?
          </Typography>
          <RadioGroup row value={article} onChange={makeListener(setArticle)}>
            {["der", "die", "das"].map(makeRadio)}
          </RadioGroup>
          <RadioGroup row value={word} onChange={makeListener(setWord)}>
            {["Apfel", "Geschirrreiniger", "Kühlschrank"].map(makeRadio)}
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

const makeRadio = (value) => (
  <FormControlLabel value={value} control={radio} label={value} />
);

const radio = <Radio />;

const makeListener = (setter) => (event) => setter(event.target.value);
