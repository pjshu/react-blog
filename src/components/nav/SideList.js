import React from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../../contants/router';
import useStyles from './styleList.style';


const SideList = ({toggleDrawer}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List className={classes.list}>
        {
          [
            {router: router.HOME, primary: 'Home'},
            {router: router.ARTICLES, primary: "Article"},
            {router: router.TAG, primary: 'Tags'},
            {router: router.ABOUT, primary: 'About'},
          ].map(item => (
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to={item.router}
              key={item.primary}>
              <ListItemText primary={item.primary}/>
            </ListItem>
          ))
        }
      </List>
    </div>);
};

export default React.memo(SideList);
