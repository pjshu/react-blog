import React from 'react';
import {Grid, makeStyles, CircularProgress} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
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
