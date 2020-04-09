import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";
import {Grid} from "@material-ui/core";
import purpleBg from "../icons/purpleBg.svg";
import blueBg from "../icons/blueBg.svg";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
    // background: `
    //   url(${purpleBg}) no-repeat fixed left -10px top -40px,
    //   url(${blueBg}) no-repeat fixed center top -40px,
    //   url(${purpleBg}) no-repeat fixed right -80px top -50px,
    //   url(${blueBg}) no-repeat fixed right -20px bottom -50px,
    //   url(${purpleBg}) no-repeat fixed center bottom -40px`,
    backgroundSize: '150px, 100px, 300px, 200px, 100px',
    [theme.breakpoints.only("sm")]: {
      backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
    [theme.breakpoints.down("xs")]: {
      backgroundSize: 0,
    },
  }
}));

function Loading() {
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify={"center"} alignItems={"center"}>
      <CircularProgress/>
    </Grid>
  );
}

export default Loading;
