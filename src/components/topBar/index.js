import React from 'react';
import AppBar from "./AppBar";
import {useMediaQuery, useTheme} from "@material-ui/core";
import Nav from '../nav';
import {useQueryUserInfo} from "../../hooks";


function TopBar() {
  const theme = useTheme();
  useQueryUserInfo();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));
  return (
    <>
      {
        matches
          ? <Nav/>
          : <AppBar/>
      }
    </>
  );
}

export default TopBar;
