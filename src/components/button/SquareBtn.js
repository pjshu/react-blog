import React from 'react';
import {Link} from "react-router-dom";
import {Button, makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
  root: {
    borderRadius: 10,
    width: 100,
    color: '#fff',
    fontWeight: 'bold',
    background: 'linear-gradient(to right bottom, #CB88D2, #8E79E9)'
  }
});


/**
 * @param props
 * @param props.label 按钮内容
 */
function SquareBtn(props) {
  const classes = useStyle();
  if (props.to) {
    props = Object.assign({
      to: props.to,
      component: Link
    }, props);
  }
  return (
    <Button
      className={classes.root}
      variant="contained"
      {...props}
    >{props.label}</Button>
  );
}

export default React.memo(SquareBtn);
