import React from 'react';
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {Grid, makeStyles} from "@material-ui/core";

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
  const classes = useStyle(props);
  return (
    <Grid container className={classes.icon}>
      <GitHubIcon/>
      <TwitterIcon/>
      <MailOutlineIcon/>
    </Grid>
  );
}

export default InfoIcon;
