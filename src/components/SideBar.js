import React from 'react';
import AdjustIcon from '@material-ui/icons/Adjust';
import {Link, useLocation} from 'react-router-dom';
import {Grid, makeStyles} from "@material-ui/core";
import router from '../contants/router';

const useStyle = makeStyles(theme => ({
  root: {
    zIndex: '10',
    height: '400px',
    position: 'fixed',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',

    '& > *': {
      display: 'block',
      marginTop: 20,
      color: '#CB88D1',
      '& :hover': {
        color: '#9462E4'
      },
    }
  }
}));

function SideBar() {
  const location = useLocation().pathname;
  const classes = useStyle();
  return (
    <div className={classes.root}>
      {
        [
          {title: 'Home', router: router.HOME},
          {title: 'Article', router: router.ARTICLES},
          {title: 'Tags', router: router.TAG},
          {title: 'Archive', router: router.ARCHIVE},
          {title: 'About', router: router.ABOUT},
        ].map(item => (
          <Grid
            style={{
              color: location === item.router ? '#9462E4' : ''
            }}
            key={item.title}
            to={item.router}
            component={Link}
            title={item.title}>
            <AdjustIcon style={{
              fontSize: 25
            }}/>
          </Grid>
        ))
      }
    </div>
  );
}

export default SideBar;
