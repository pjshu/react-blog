import React from 'react';
import logo from "../../asset/icons/logo.svg";
import {makeStyles} from "@material-ui/core";
import router from '../../contants/router';
import {Link} from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  logo: {
    position: 'absolute',
    zIndex: '100',
    left: 40,
    top: 10,
    '& > img': {
      height: 50,
    },
    [theme.breakpoints.down("xs")]: {
      left: 10,
    },
  },
}));

function Logo() {
  const classes = useStyle();
  return (
    <Link className={classes.logo} to={router.HOME}>
      <img src={logo} alt=""/>
    </Link>
  );
}

export default Logo;
