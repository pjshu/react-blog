import React, {useCallback, useMemo, useState} from 'react';
import {Button, Drawer} from '@material-ui/core';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SideList from './SideList';
import useStyles from './nav.style';

function Nav() {
  const classes = useStyles();
  const [state, setState] = useState(false);

  const toggleDrawer = useCallback(() => {
    setState((state) => !state);
  }, []);

  const drawerClasses = useMemo(() => ({
    paper: classes.drawerPaper,
    paperAnchorDockedLeft: classes.paperAnchorDockedLeft,
  }), [classes.drawerPaper, classes.paperAnchorDockedLeft]);


  return (
    <div className={classes.root}>
      <Button onClick={toggleDrawer}>
        <FingerprintIcon className={classes.FingerprintIcon}/>
      </Button>
      <Drawer
        classes={drawerClasses}
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

export default React.memo(Nav);
