import React from 'react';
import AdjustIcon from '@material-ui/icons/Adjust';
import {Link, useLocation} from 'react-router-dom';
import {Grid, makeStyles} from "@material-ui/core";
import router from '../contants/router';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';


const useStyle = makeStyles({
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
  },
  icon: {
    fontSize: 25
  },
});

function SideBar() {
  const {pathname} = useLocation();
  const classes = useStyle();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'), {noSsr: true});

  return (
    <>
      {
        matches ? null :
          <div className={classes.root}>
            {
              [
                {title: 'Home', router: router.HOME},
                {title: 'Article', router: router.ARTICLES},
                {title: 'Tags', router: router.TAG},
                {title: 'About', router: router.ABOUT},
              ].map(item => (
                <Grid
                  style={{
                    color: pathname === item.router ? '#9462E4' : ''
                  }}
                  key={item.title}
                  to={item.router}
                  component={Link}
                  title={item.title}
                >
                  <AdjustIcon className={classes.icon}/>
                </Grid>
              ))
            }
          </div>
      }
    </>
  );
}

export default React.memo(SideBar);
