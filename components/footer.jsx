import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {IconButton, Link, Stack, Typography} from "@mui/material";
import {useLocalStorage} from "../hooks/local-storage";

export const Footer = () => {
  const [footerState, setFooterState] = useLocalStorage("footerState");

  if (footerState === footerStates.collapsed) {
    return (
      <IconButton
        sx={buttonStyle}
        aria-label="mehr zeigen"
        onClick={() => setFooterState(footerStates.expanded)}
      >
        <ExpandLess />
      </IconButton>
    );
  }

  return (
    <Stack>
      <IconButton
        sx={buttonStyle}
        aria-label="weniger zeigen"
        onClick={() => setFooterState(footerStates.collapsed)}
      >
        <ExpandMore />
      </IconButton>
      <Typography align="center" variant="caption">
        © <FooterLink url="https://vinnich.uk" /> (diese Seite)
        <br />
        © <FooterLink url="https://frequencylists.blogspot.com/" /> (die Wörter)
      </Typography>
    </Stack>
  );
};

const FooterLink = ({ url }) => (
  <Link underline="hover" href={url}>
    {url}
  </Link>
);

const buttonStyle = {
  alignSelf: "center",
};

const footerStates = {
  expanded: "expanded",
  collapsed: "collapsed",
};
