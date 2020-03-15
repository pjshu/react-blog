import React from 'react';
import {Link} from "react-router-dom";
import {Button, makeStyles} from "@material-ui/core";

const useStyle = makeStyles(theme => ({
  root: {
    fontSize: 18,
    border: 0,

    [theme.breakpoints.down("sm")]: {
      lineHeight: '40px',
    },
    borderBottom: "3px solid rgb(212, 212, 212)",
    '&:hover': {
      background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
  },
}));

/**
 * @param props
 * @param props.label 按钮内容
 */
function UnderlineBtn(props) {
  const classes = useStyle();
  if (props.to) {
    props = Object.assign({
      to: props.to,
      component: Link
    }, props);
  }
  return (
    <Button
      {...props}
      variant="outlined"
      className={classes.root}
    >
      {props.label}
    </Button>
  );
}

export default UnderlineBtn;
