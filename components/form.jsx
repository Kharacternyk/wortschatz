import {Cake, PedalBike, WbSunny} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  Chip,
  CircularProgress,
  FormControlLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {useState} from "react";
import {usePrefetch} from "../hooks/prefetch.js";

export const Form = () => {
  const [articleIndex, setArticleIndex] = useState(1);
  const [nounIndex, setNounIndex] = useState(1);
  const [iterationCount, setIterationCount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const quiz = usePrefetch("/nouns", [iterationCount]);

  if (quiz === null) {
    return <CircularProgress />;
  }

  const [englishNoun, correctArticle, correctNounIndex, ...germanNouns] =
    quiz.split("\t");
  const correctNoun = germanNouns[correctNounIndex];

  const toggleVerified = () => {
    if (isVerified) {
      setIterationCount(iterationCount + 1);
    }
    setIsVerified(!isVerified);
  };
  const [buttonText, buttonVariant] = isVerified
    ? ["Noch ein Mal", "text"]
    : ["Prüfen", "contained"];
  const [answerText, answerSeverity] =
    articleIndex == articles.indexOf(correctArticle) &&
    nounIndex == correctNounIndex
      ? ["Richtig!", "success"]
      : nounIndex == correctNounIndex
      ? [`Fast so, es heißt ${correctArticle} ${correctNoun}`, "warning"]
      : [`Nein, es heißt ${correctArticle} ${correctNoun}`, "error"];
  const answerAlert = isVerified ? (
    <Alert severity={answerSeverity}>{answerText}</Alert>
  ) : null;
  return (
    <>
      <Typography>
        Wie heißt{" "}
        <span lang="en-us">
          <Link
            href={`https://www.merriam-webster.com/dictionary/${englishNoun}`}
          >
            <Chip avatar={flag} label={englishNoun}></Chip>
          </Link>
        </span>{" "}
        auf Deutsch?
      </Typography>
      <RadioGroup
        sx={radioGroupStyle}
        row
        value={articleIndex}
        onChange={makeListener(setArticleIndex)}
      >
        {articles.map(makeArticleRadio(articleIndex))}
      </RadioGroup>
      <RadioGroup
        sx={radioGroupStyle}
        row
        value={nounIndex}
        onChange={makeListener(setNounIndex)}
      >
        {germanNouns.map(makeNounRadio(nounIndex))}
      </RadioGroup>
      <Button variant={buttonVariant} onClick={toggleVerified}>
        {buttonText}
      </Button>
      {answerAlert}
    </>
  );
};

const makeRadio =
  (icons = null) =>
  (selectedIndex) =>
  (text, index) => {
    const color = selectedIndex == index ? "primary" : "default";
    const icon = icons != null ? icons[index] : null;
    const label = <Chip color={color} label={text} icon={icon} />;

    return (
      <FormControlLabel
        key={index}
        value={index}
        control={radio}
        label={label}
        disableTypography
      />
    );
  };

const makeArticleRadio = makeRadio([<Cake />, <WbSunny />, <PedalBike />]);

const makeNounRadio = makeRadio();

const radioGroupStyle = {
  justifyContent: "center",
};

const articles = ["der", "die", "das"];

const radio = <Radio />;

const flag = <Avatar>🇺🇸</Avatar>;

const makeListener = (setter) => (event) => setter(event.target.value);
