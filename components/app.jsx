import {
  ChakraProvider,
  Radio,
  RadioGroup,
  Stack,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import {StrictMode, useState} from "react";

export const App = () => {
  const [article, setArticle] = useState("die");

  return (
    <StrictMode>
      <ChakraProvider theme={theme}>
        <RadioGroup value={article} onChange={setArticle}>
          <Stack>
            <Radio value="der">der</Radio>
            <Radio value="die">die</Radio>
            <Radio value="das">das</Radio>
          </Stack>
        </RadioGroup>
      </ChakraProvider>
    </StrictMode>
  );
};

const theme = extendTheme(
  {
    config: {
      initialColorMode: "dark",
    },
  },
  withDefaultColorScheme({
    colorScheme: "orange",
  })
);
