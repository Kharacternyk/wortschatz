import {NightsStay, PedalBike, WbSunny} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Button,
  Chip,
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

      nouns.push({
        english: english.toLowerCase(),
        germanArticle: germanArticle.toLowerCase(),
        germanNoun,
      });
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
  const [answerText, answerSeverity] =
    articleIndex == articles.indexOf(germanArticle) &&
    nounIndex == correctNounIndex
      ? ["Richtig!", "success"]
      : [`Nein, das sollte ${germanArticle} ${germanNoun} sein`, "error"];
  const answerAlert = isVerified ? (
    <Alert severity={answerSeverity}>{answerText}</Alert>
  ) : null;
  return (
    <>
      <Typography>
        Wie heißt{" "}
        <span lang="en-us">
          <Chip avatar={flag} label={nouns[correctNounIndex].english}></Chip>
        </span>{" "}
        auf Deutsch?
      </Typography>
      <RadioGroup
        row
        value={articleIndex}
        onChange={makeListener(setArticleIndex)}
      >
        {articles.map(makeArticleRadio(articleIndex))}
      </RadioGroup>
      <RadioGroup row value={nounIndex} onChange={makeListener(setNounIndex)}>
        {nouns
          .map((noun) => `${articles[articleIndex]} ${noun.germanNoun}`)
          .map(makeNounRadio(nounIndex))}
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

const makeArticleRadio = makeRadio([
  <NightsStay />,
  <WbSunny />,
  <PedalBike />,
]);

const makeNounRadio = makeRadio();

const articles = ["der", "die", "das"];

const radio = <Radio />;

const flag = <Avatar>🇺🇸</Avatar>;

const makeListener = (setter) => (event) => setter(event.target.value);
