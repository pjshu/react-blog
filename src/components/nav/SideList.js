import React from 'react';
import {List, ListItem, ListItemText, makeStyles} from '@material-ui/core';
import {Link} from "react-router-dom";
import router from '../../contants/router';


const useStyles = makeStyles({
  root: {
    width: 100,
  },
  fullList: {
    width: 'auto',
  },
});

const SideList = ({toggleDrawer}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List style={{
        height: '450px',
        position: 'fixed',
        top: '50%',
        transform: 'translateY(-50%)',
      }}>
        {
          [
            {router: router.HOME, primary: 'Home'},
            {router: router.ARTICLES, primary: "Article"},
            {router: router.TAG, primary: 'Tags'},
            {router: router.ARCHIVE, primary: 'Archive'},
            {router: router.ABOUT, primary: 'About'},
          ].map(item => (
            <ListItem
              style={{
                height: 25,
                marginTop: 20,
                padding: 1
              }}
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

export default SideList;
