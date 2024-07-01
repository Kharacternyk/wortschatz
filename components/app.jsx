import {
  CssBaseline,
  FormControlLabel,
  Radio,
  RadioGroup,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import {StrictMode, useState} from "react";

export const App = () => {
  const [article, setArticle] = useState("die");
  const onArticleChange = (event) => setArticle(event.target.value);

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RadioGroup row value={article} onChange={onArticleChange}>
          {["der", "die", "das"].map(makeRadio)}
        </RadioGroup>
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
