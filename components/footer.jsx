import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Fab, Link, Typography} from "@mui/material";
import {useLocalStorage} from "../hooks/local-storage";

export const Footer = () => {
  const [footerState, setFooterState] = useLocalStorage("footerState");

  if (footerState === footerStates.collapsed) {
    return (
      <Fab
        size="small"
        aria-label="mehr zeigen"
        onClick={() => setFooterState(footerStates.expanded)}
      >
        <ExpandMore />
      </Fab>
    );
  }

  return (
    <>
      <Fab
        size="small"
        aria-label="weniger zeigen"
        onClick={() => setFooterState(footerStates.collapsed)}
      >
        <ExpandLess />
      </Fab>
      <Typography align="center" variant="caption">
        © <FooterLink url="https://vinnich.uk" /> (diese Seite)
        <br />
        © <FooterLink url="https://frequencylists.blogspot.com/" /> (die Wörter)
      </Typography>
    </>
  );
};

const FooterLink = ({ url }) => (
  <Link underline="hover" href={url}>
    {url}
  </Link>
);

const footerStates = {
  expanded: "expanded",
  collapsed: "collapsed",
};
