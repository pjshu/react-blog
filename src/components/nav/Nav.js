import React, {useState} from 'react';
import {Button, Drawer, makeStyles} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SideList from './SideList';



const useStyles = makeStyles({
  root: {
    zIndex: '10',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  FingerprintIcon: {
    fontSize: 40,
    color: '#CB88D1',
  },
  drawerPaper: {
    boxShadow: '0 0 0',
    backgroundColor: 'transparent'
  },
  paperAnchorDockedLeft: {
    borderRight: 0
  }
});


export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  // const toggleDrawer = (open) => event => {
  //   setState(open);
  // };
  const toggleDrawer = () => {
    setState(!state);
  };

  return (
    <div className={classes.root}>
      <Button onClick={toggleDrawer}>
        <FingerprintIcon className={classes.FingerprintIcon}/>
      </Button>
      <Drawer
        classes={{
          paper: classes.drawerPaper,
          paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
        }}
        // variant="persistent"
        anchor="left"
        open={state}
        // onClose={toggleDrawer(false)}
        onClose={toggleDrawer}
      >
        <SideList {...{toggleDrawer}}/>
      </Drawer>
    </div>
  );
}
