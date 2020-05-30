import React from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Button, makeStyles} from "@material-ui/core";
import {combineClassName} from "../helpers/style";


const useStyle = makeStyles({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: 50,
    height: 50,
    MozBorderRadius: 25,
    WebkitBorderRadius: 25,
    borderRadius: 25,
    minWidth: 50,
    background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
  },
  icon: {
    color: '#fff'
  }
});

function ExpandMoreButton({hidden = false, className = null, ...props}) {
  const classes = useStyle();

  return (
    <>
      {
        hidden ? null : (
          <Button
            className={combineClassName(classes.root, className)}
            variant="contained"
            {...props}
          >
            <ExpandMoreIcon className={classes.icon}/>
          </Button>
        )
      }
    </>
  );
}

export default React.memo(ExpandMoreButton, (pre, next) => {
  return pre.hidden === next.hidden;
});
