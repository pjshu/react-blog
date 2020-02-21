import React from 'react';
import {Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {Link} from "react-router-dom";
import router from '../../contants/router';


const useStyles = makeStyles({
  root: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  expansionButton: {
    '&:hover': {
      background: '#F6F8FC'
    },
  },
  aboutMeList: {
    '& > *': {
      display: "flex",
      justifyContent: "center"
    }
  },
  buttonList: {
    '& > *:hover': {
      backgroundColor: '#F6F8FC',
    }
  }
});

const SideList = ({toggleDrawer}) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.aboutMeList}>
        <ListItem>
          <Avatar
            className={classes.avatar}
            src="https://shushugo.com/uploads/avatar.jpg"/>
        </ListItem>
        <ListItem>pjs</ListItem>
        <ListItem>学得越多,却发现自己懂得越少</ListItem>
      </List>
      <Divider/>
      <List className={classes.buttonList}>
        {
          [
            {'icon': <HomeIcon/>, router: router.HOME, primary: 'Home'},
            {'icon': <HomeIcon/>, router: router.ARTICLES, primary: "Article"},
            {'icon': <LoyaltyIcon/>, router: router.TAG, primary: 'Tags'},
            {'icon': <ArchiveIcon/>, router: router.ARCHIVE, primary: 'Archive'},
            {'icon': <MailOutlineIcon/>, router: router.ABOUT, primary: 'About'},
          ].map(item => (
            <ListItem button component={Link} to={item.router} key={item.primary}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.primary}/>
            </ListItem>
          ))
        }
      </List>
    </div>);
};

export default SideList;
