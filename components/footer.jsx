import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, IconButton, Link, SvgIcon, Typography } from "@mui/material";
import { useLocalStorage } from "../hooks/local-storage";
import GitHubLogo from "../images/github.svg?react";

export const Footer = () => {
  const [footerState, setFooterState] = useLocalStorage("footerState");

  if (footerState === footerStates.collapsed) {
    return (
      <>
        <Box sx={spacerStyle} />
        <IconButton
          size="small"
          aria-label="mehr zeigen"
          onClick={() => setFooterState(footerStates.expanded)}
          key={0}
        >
          <KeyboardDoubleArrowLeft />
        </IconButton>
      </>
    );
  }

  return (
    <>
      <Typography variant="caption" sx={spacerStyle}>
        © <FooterLink url="https://vinnich.uk" /> (diese Seite)
        <br />
        © <FooterLink url="https://frequencylists.blogspot.com/" /> (die Wörter)
      </Typography>
      <IconButton
        href="https://github.com/Kharacternyk/wortschatz"
        aria-label="GitHub"
      >
        <SvgIcon inheritViewBox component={GitHubLogo} />
      </IconButton>
      <IconButton
        size="small"
        aria-label="weniger zeigen"
        onClick={() => setFooterState(footerStates.collapsed)}
        key={0}
      >
        <KeyboardDoubleArrowRight />
      </IconButton>
    </>
  );
};

const FooterLink = ({ url }) => (
  <Link underline="hover" href={url}>
    {url}
  </Link>
);

const spacerStyle = {
  flexGrow: 1,
};

const footerStates = {
  expanded: "expanded",
  collapsed: "collapsed",
};
