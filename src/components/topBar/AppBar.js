import React from 'react';
import {Grid, makeStyles, fade} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link, useLocation} from 'react-router-dom';
import router from '../../contants/router';
import Logo from "./Logo";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {useTheme} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import axios from '../../helpers/http';
import api from '../../contants/api';

const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: props => props.pathname === router.HOME ?
      '0 0 0' : '0px 2px 4px -1px rgba(0,0,0,0.2)',
    backgroundColor: '#fff',
    // opacity: 0.7
  },
  toolbar: {
    display: "flex",
    justifyContent: 'flex-end',
    '& > *': {
      marginRight: theme.spacing(4)
    }
  },
  navItem: {
    color: 'black'
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

}));

export default function StyleAppBar() {
  const {pathname} = useLocation();
  const classes = useStyles({pathname});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const handleOnKeyDown = (e) => {
    function filter(str) {
      const pattern = /[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？]/g;
      return str.replace(pattern, "");
    }

    if (e.keyCode === 13) {
      axios.get(api.search, {
        params: {
          search: filter(e.target.value)
        }
      }).then(res => {
        console.log(res);
      }).then(error => {

      });
    }
  };
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        {
          matches ? null : <Logo/>
        }
        <div className={classes.search} onKeyDown={handleOnKeyDown}>
          <div className={classes.searchIcon}>
            <SearchIcon/>
          </div>
          <InputBase
            placeholder="搜索…"
            inputProps={{'aria-label': 'search'}}
          />
        </div>
        {
          [
            {'router': router.ARTICLES, title: '文章列表'},
            {'router': router.TAG, title: '标签'},
            {'router': router.ABOUT, title: '关于'}
          ].map((item) => (
            <Grid
              key={item.title}
              component={Link}
              to={item.router}
              className={classes.navItem}
            >
              {item.title}
            </Grid>
          ))
        }
      </Toolbar>
    </AppBar>
  );
}
