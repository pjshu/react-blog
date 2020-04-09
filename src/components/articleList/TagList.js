import React from 'react';
import ColorTag from "../tag/ColorTag";
import {Grid, makeStyles} from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';
const useStyles = makeStyles(theme => ({
  colorTags: {
    '& > *': {
      marginTop: '10px'
    }
  }
}));

export function TagList() {
  const classes = useStyles();
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      className={classes.colorTags}
    >
      <ColorTag {...{id: 1, count: 8, name: 'ubuntu'}}/>
      <ColorTag {...{id: 2, count: 8, name: 'ubuntu'}}/>
      <ColorTag {...{id: 3, count: 8, name: 'ubuntu'}}/>
      <ColorTag {...{id: 4, count: 8, name: 'ubuntu'}}/>
      <ColorTag {...{id: 5, count: 8, name: 'ubuntu'}}/>
      <ColorTag {...{id: 6, count: 8, name: 'ubuntu'}}/>
      <CachedIcon/>
    </Grid>
  );
}

export default TagList;
