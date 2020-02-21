import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from "../../icons/logo.svg";
import {Link} from 'react-router-dom';
import router from '../../contants/router';

const useStyles = makeStyles(theme => ({
  toolbar: {
    display: "flex",
    justifyContent: 'flex-end',
    '& > *': {
      marginRight: theme.spacing(4)
    }
  }
}));

export default function StyleAppBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      style={{
        height: '0',
        boxShadow: '0 0 white',
        background: 'white',
      }}>
      <Toolbar className={classes.toolbar}>
        <Grid

          style={{position: 'absolute', left: 40}}>
          <img src={logo} alt="" style={{height: 50}}/>
        </Grid>
        <Grid
          component={Link}
          to={router.ARTICLES}
          style={{color: 'black'}}>
          ARTICLES
        </Grid>
        <Grid
        component={Link}
          to={router.TAG}
          style={{color: 'black'}}>
          TAGS
        </Grid>
        <Grid
          component={Link}
          to={router.ARCHIVE}
          style={{color: 'black'}}>
          ARCHIVE
        </Grid>
        <Grid
          component={Link}
          to={router.ABOUT}
          style={{color: 'black'}}>
          ABOUT
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
