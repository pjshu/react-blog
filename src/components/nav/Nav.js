import React, {useState} from 'react';
import {Button, Drawer, makeStyles, useMediaQuery, useTheme} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MenuIcon from '@material-ui/icons/Menu';
import SideList from './SideList';

const useStyles = makeStyles({
  expansionButton: {
    '&:hover': {
      background: '#F6F8FC'
    },
  }
});


export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.only('xs'));
  const toggleDrawer = (open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState(open);
  };


  return (
    <div>
      <Button onClick={toggleDrawer(true)} className={classes.expansionButton}>
        {
          matches ? <FingerprintIcon/> : <MenuIcon/>
        }
      </Button>
      <Drawer open={state} onClose={toggleDrawer(false)}>
        <SideList {...{toggleDrawer}}/>
      </Drawer>
    </div>
  );
}
