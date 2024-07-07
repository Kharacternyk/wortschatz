import {
  Alert,
  Button,
  CircularProgress,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import {useEffect, useState} from "react";

export const Form = () => {
  const [articleIndex, setArticleIndex] = useState(1);
  const [nounIndex, setNounIndex] = useState(1);
  const [nouns, setNouns] = useState(null);
  const [correctNounIndex, setCorrectNounIndex] = useState(null);
  const [iterationCount, setIterationCount] = useState(0);
  const [isVerified, setIsVerified] = useState(false);
  const fetchNouns = async () => {
    const response = await fetch("/nouns");
    const text = await response.text();
    const lines = text.split("\n");
    const nouns = [];

    for (const line of lines) {
      const [english, german, germanPlural] = line.split("\t");
      const [germanArticle, germanNoun] = german.split(" ", 2);

      nouns.push({ english, germanArticle, germanNoun });
    }

    setNouns(nouns);
    setCorrectNounIndex(Math.floor(Math.random() * 3));
  };

  useEffect(() => {
    fetchNouns();
  }, [iterationCount]);

  if (nouns === null) {
    return <CircularProgress />;
  }

  const toggleVerified = () => {
    if (isVerified) {
      setIterationCount(iterationCount + 1);
    }
    setIsVerified(!isVerified);
  };
  const [buttonText, buttonVariant] = isVerified
    ? ["Noch ein Mal", "text"]
    : ["Prüfen", "contained"];
  const { germanArticle, germanNoun } = nouns[correctNounIndex];
  const [answerText] =
    articleIndex == articles.indexOf(germanArticle) &&
    nounIndex == correctNounIndex
      ? ["Richtig!"]
      : [`Nein, das sollte ${germanArticle} ${germanNoun} sein`];
  const answerAlert = isVerified ? (
    <Alert icon={false} color="primary">
      {answerText}
    </Alert>
  ) : null;
  return (
    <>
      <Typography>
        Wie heißt
        <Typography color="primary" component="span">
          <span lang="en-us"> {nouns[correctNounIndex].english} </span>
        </Typography>
        auf Deutsch?
      </Typography>
      <RadioGroup
        row
        value={articleIndex}
        onChange={makeListener(setArticleIndex)}
      >
        {articles.map(makeRadio(articleIndex))}
      </RadioGroup>
      <RadioGroup row value={nounIndex} onChange={makeListener(setNounIndex)}>
        {nouns.map((noun) => noun.germanNoun).map(makeRadio(nounIndex))}
      </RadioGroup>
      <Button variant={buttonVariant} onClick={toggleVerified}>
        {buttonText}
      </Button>
      {answerAlert}
    </>
  );
};

const articles = ["Der", "Die", "Das"];

const makeRadio = (selectedIndex) => (text, index) => {
  const label =
    index == selectedIndex ? (
      <Typography color="primary">{text}</Typography>
    ) : (
      text
    );

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

const radio = <Radio />;

const makeListener = (setter) => (event) => setter(event.target.value);
