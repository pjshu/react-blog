import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HomeIcon from '@material-ui/icons/Home';
import ArchiveIcon from '@material-ui/icons/Archive';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {Link} from "react-router-dom";
import router from '../contants/router';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  AlignCenter: {
    display: "flex",
    justifyContent: "center"
  }
});


export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const Route = React.forwardRef((props, ref) => <Link innerRef={ref} {...props} />);

  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };
  const SideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem className={classes.AlignCenter}>
          <Avatar
            className={classes.avatar}
            src="https://shushugo.com/uploads/avatar.jpg"/>
        </ListItem>
        <ListItem className={classes.AlignCenter}>pjs</ListItem>
        <ListItem className={classes.AlignCenter}>学得越多,却发现自己懂得越少</ListItem>
        <Divider/>
        <ListItem button component={Route} to={router.HOME}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>
        <ListItem button component={Route} to={router.TAG}>
          <ListItemIcon><LoyaltyIcon/></ListItemIcon>
          <ListItemText primary="Tags"/>
        </ListItem>
        <ListItem button component={Route} to={router.ARCHIVE}>
          <ListItemIcon><ArchiveIcon/></ListItemIcon>
          <ListItemText primary="Archive"/>
        </ListItem>
        <ListItem button component={Route} to={router.ABOUT}>
          <ListItemIcon><MailOutlineIcon/></ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><FingerprintIcon/></Button>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <SideList/>
      </Drawer>
    </div>
  );
}
