import React from 'react';
import {Grid, makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import router from '../../contants/router';

const useStyles = makeStyles(theme => ({
  root: props => ({
    display: props.navHidden ? 'none' : '',
    height: '0',
    boxShadow: '0 0 white',
    background: 'white',
  }),
  toolbar: {
    display: "flex",
    justifyContent: 'flex-end',
    '& > *': {
      marginRight: theme.spacing(4)
    }
  },
  navItem: {
    color: 'black'
  }
}));

export default function StyleAppBar(props) {
  const classes = useStyles(props);
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {
          [
            {'router': router.ARTICLES, title: 'ARTICLES'},
            {'router': router.TAG, title: 'TAGS'},
            {'router': router.ARCHIVE, title: 'ARCHIVE'},
            {'router': router.ABOUT, title: 'ABOUT'}
          ].map(item => (
            <Grid
              key={item.title}
              component={Link}
              to={item.router}
              className={classes.navItem}>
              {item.title}
            </Grid>
          ))
        }
      </Toolbar>
    </AppBar>
  );
}
