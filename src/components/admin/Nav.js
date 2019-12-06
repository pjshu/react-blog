import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import HomeIcon from '@material-ui/icons/Home';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import {Link} from "react-router-dom";
import router from '../../contants/router';

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
    display:"flex",
    justifyContent:"center"
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
        <ListItem button component={Route} to={router.HOME}>
          <ListItemIcon><HomeIcon/></ListItemIcon>
          <ListItemText primary="用户"/>
        </ListItem>
        <ListItem button component={Route} to={router.TAG}>
          <ListItemIcon><LoyaltyIcon/></ListItemIcon>
          <ListItemText primary="文章"/>
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
