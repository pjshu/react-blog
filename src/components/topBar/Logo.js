import React from 'react';
import logo from "../../asset/icons/logo.svg";
import {Grid, makeStyles} from "@material-ui/core";
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
    <Grid className={classes.logo} component={Link} to={router.HOME}>
      <img src={logo} alt=""/>
    </Grid>
  );
}

export default Logo;
