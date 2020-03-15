import React from 'react';
import AppBar from "./AppBar";
import {useMediaQuery, useTheme} from "@material-ui/core";
import Logo from "./Logo";
import Nav from '../nav';


function TopBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <>
      <Logo/>
      {
        matches
          ? <Nav/>
          : <AppBar/>
      }
    </>
  );
}

export default TopBar;
