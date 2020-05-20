import React from 'react';
import AppBar from "./AppBar";
import {useMediaQuery, useTheme} from "@material-ui/core";
import Nav from '../nav';
import {useQueryUserInfo} from "../../hooks";


function TopBar() {
  useQueryUserInfo();
  const theme = useTheme();
  // 不加{noSsr:true} 参数导致matches 默认为false, 渲染一次后才为真正的matches
  const matches = useMediaQuery(theme.breakpoints.only('xs'), {noSsr: true});
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
