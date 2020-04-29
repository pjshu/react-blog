import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import React, {useCallback, useContext} from "react";
import {Context} from "../context";
import ReactDOM from 'react-dom';
import Alert from '@material-ui/lab/Alert';

const messageRoot = document.getElementById('messageRoot');

const SlideTransition = React.memo(function SlideTransition(props) {
  return <Slide {...props} direction="up"/>;
});


const Message = React.memo(function Message() {
  const [{messageBar}, {setMessageBar}] = useContext(Context);
  const handleClose = useCallback(() => {
    setMessageBar({
      open: false,
      message: ""
    });
  }, [setMessageBar]);
  return <ContextMessage {...{handleClose, messageBar}}/>;
});

const ContextMessage = React.memo(function Message({handleClose, messageBar}) {
  return (
    <Snackbar
      open={messageBar.open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
    >
      <Alert severity="info" elevation={6}>
        {messageBar.message}
      </Alert>
    </Snackbar>
  );
}, (pre, next) => {
  return pre.handleClose === next.handleClose &&
    pre.messageBar.open === next.messageBar.open;
});


export default function PortalMessage() {
  return ReactDOM.createPortal(<Message/>, messageRoot);
}
