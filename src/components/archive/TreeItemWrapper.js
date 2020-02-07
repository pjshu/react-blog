import React from "react";
import TreeItem from '@material-ui/lab/TreeItem';
import {Box, Grid, makeStyles, Typography} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    '&:focus > $content': {
      backgroundColor: '#F6F8FC',
      color: '#eee',
    },
  },
  content: {
    '&:hover': {
      backgroundColor: '#F6F8FC',
    }
  },
  typography: {
    lineHeight: '40px',
    '& > span': {
      marginRight: "10px",
      color: '#393638'
    }
  }
});
export default function TreeItemWrapper({labelText, labelInfo, ...other}) {
  const classes = useStyle();
  return (
    <TreeItem
      classes={{
        root: classes.root,
        content: classes.content,
      }}
      className={classes.root}
      label={
        <Grid className={classes.root}>
          <Typography className={classes.typography}>
            <Box component={"span"}>
              {labelText}
            </Box>
            <Box component={"span"}>
              {labelInfo}
            </Box>
          </Typography>
        </Grid>
      }
      {...other}
    />
  );
}
