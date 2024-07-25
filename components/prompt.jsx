import {Avatar, Chip, Link, Typography} from "@mui/material";
import {memo} from "react";

export const Prompt = memo(({ noun }) => {
  return (
    <Typography>
      Wie heißt{" "}
      <span lang="en-us">
        <Link href={`https://www.merriam-webster.com/dictionary/${noun}`}>
          <Chip avatar={flag} label={noun}></Chip>
        </Link>
      </span>{" "}
      auf Deutsch?
    </Typography>
  );
});

const flag = <Avatar>🇺🇸</Avatar>;
