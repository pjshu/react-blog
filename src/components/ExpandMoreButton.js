import React from 'react';
import {Link} from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {Button, makeStyles} from "@material-ui/core";


const useStyle = makeStyles({
  root: absolute => {
    const common = {
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
    };
    const absoluteStyle = {
      position: 'absolute',
      left: '50%',
      bottom: 20,
      transform: "translate(-50%, 0)",
    };
    return Object.assign(common, absolute ? absoluteStyle : {});
  },
  icon: {
    color: '#fff'
  }
});

/**
 * @param open
 * @param props
 * @param props.absolute 如果传入该属性,则按钮位于页面正下方中央
 * @param props.to 如果传入,按钮表现为Link,用于路由跳转
 */
function ExpandMoreButton({hidden = false, ...props}) {
  const classes = useStyle(props.absolute);

  if (props.to) {
    props = Object.assign({
      to: props.to,
      component: Link
    }, props);
  }

  return (
    <>
      {
        hidden ? null : (
          <Button
            className={classes.root}
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
