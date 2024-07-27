import {Avatar, Chip, Link, Typography} from "@mui/material";
import {memo} from "react";

export const Prompt = memo(({ noun }) => {
  return (
    <Typography component="div">
      Wie heißt{" "}
      <span lang="en-us">
        <Link
          href={`https://www.merriam-webster.com/dictionary/${noun}`}
          target="_blank"
          rel="noopener"
          tabindex={-1}
        >
          <Chip avatar={flag} label={noun}></Chip>
        </Link>
      </span>{" "}
      auf Deutsch?
    </Typography>
  );
});

const flag = <Avatar>🇺🇸</Avatar>;
