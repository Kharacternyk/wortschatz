import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Link,
  SvgIcon,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {useCallback} from "react";
import {useLocalStorage} from "../hooks/local-storage";
import GitHubLogo from "../images/github.svg?react";

export const Footer = () => {
  const [footerState, setFooterState] = useLocalStorage("footerState");
  const expand = useCallback(() => setFooterState(footerStates.expanded), []);
  const collapse = useCallback(
    () => setFooterState(footerStates.collapsed),
    []
  );

  if (footerState === footerStates.collapsed) {
    return (
      <AppBar elevation={0} sx={appBarStyle}>
        <Toolbar variant="dense">
          <Box sx={spacerStyle} />
          <Tooltip title="Mehr zeigen">
            <IconButton
              size="small"
              aria-label="mehr zeigen"
              onClick={expand}
              key={0}
            >
              <KeyboardDoubleArrowLeft />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }

  return (
    <AppBar sx={appBarStyle}>
      <Toolbar variant="dense">
        <Typography variant="caption" sx={spacerStyle}>
          © <FooterLink url="https://vinnich.uk" /> (diese Seite, manche Wörter)
          <br />
          © <FooterLink url="https://frequencylists.blogspot.com/" /> (die
          Wörter)
        </Typography>
        <IconButton
          href="https://github.com/Kharacternyk/wortschatz"
          aria-label="GitHub"
        >
          <SvgIcon inheritViewBox component={GitHubLogo} />
        </IconButton>
        <Tooltip title="Weniger zeigen">
          <IconButton
            size="small"
            aria-label="weniger zeigen"
            onClick={collapse}
            key={0}
          >
            <KeyboardDoubleArrowRight />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

const FooterLink = ({ url }) => (
  <Link underline="hover" href={url}>
    {url}
  </Link>
);

const appBarStyle = {
  bottom: 0,
  top: "auto",
};

const spacerStyle = {
  flexGrow: 1,
};

const footerStates = {
  expanded: "expanded",
  collapsed: "collapsed",
};
