import React from 'react';
import {
  Toolbar,
  AppBar,
  useTheme,
  useMediaQuery,
  InputBase
} from '@material-ui/core';
import {Link, useLocation, useHistory} from 'react-router-dom';
import router from '../../contants/router';
import Logo from "./Logo";
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './appBar.style';
import {filterStr} from '../../helpers/misc';


export default function StyleAppBar() {
  const history = useHistory();
  const {pathname} = useLocation();
  const classes = useStyles({pathname});
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const handleOnKeyDown = (e) => {
    if (e.keyCode === 13) {
      history.push({
        pathname: router.ARTICLES,
        search: `?search=${filterStr(e.target.value)}`
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
            <Link
              key={item.title}
              to={item.router}
              className={classes.navItem}
            >
              {item.title}
            </Link>
          ))
        }
      </Toolbar>
    </AppBar>
  );
}
