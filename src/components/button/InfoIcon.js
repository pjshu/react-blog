import React, {useCallback, useContext} from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {Grid, makeStyles} from "@material-ui/core";
import {GITHUB, EMAIL, TWITTER} from "../../config/userinfo";
import {CopyToClipboard} from "react-copy-to-clipboard";
import {Context} from "../../context";


const useStyle = makeStyles({
  icon: props => ({
    justifyContent: props.justify,
    '& > *': {
      '&:nth-child(1)': {
        color: '#CB88D2'
      },
      '&:nth-child(2)': {
        color: '#C186D6',
        marginRight: props.spacing || 50,
        marginLeft: props.spacing || 50,
      },
      '&:nth-child(3)': {
        color: '#8E79E9'
      }
    }
  })
});

/**
 * @param props
 * @param props.justify 用于对齐三个icon
 */

function InfoIcon(props) {
  const [, {
    setMessageBar,
  }] = useContext(Context);

  const handleOnCopy = useCallback(() => {
    setMessageBar({
      open: true,
      message: "已经复制到剪切板・ω・"
    });
  }, [setMessageBar]);
  return <ContextInfoIcon {...{handleOnCopy, ...props}}/>;
};

const ContextInfoIcon = React.memo(function ContextInfoIcon({handleOnCopy, ...props}) {
  const classes = useStyle(props);

  return (
    <Grid container className={classes.icon}>
      <a href={GITHUB}>
        <GitHubIcon/>
      </a>
      <a href={TWITTER}>
        <TwitterIcon/>
      </a>
      <CopyToClipboard
        title={'点击复制'}
        text={EMAIL}
        onCopy={handleOnCopy}
      >
        {/*mailto chrome 无效呵呵*/}
        <a href={`mailto:${EMAIL}`}>
          <MailOutlineIcon/>
        </a>
      </CopyToClipboard>
    </Grid>
  );
}, (pre, next) => {
  return pre.handleOnCopy === next.handleOnCopy;
});


export default React.memo(InfoIcon, (pre, next) => {
  return true;
});
