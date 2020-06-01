import React, {useCallback, useContext, useState} from 'react';
import {Button, Grid, Typography} from "@material-ui/core";
import ExpandMoreButton from '../ExpandMoreButton';
import icon from '../../asset/icons/home.svg';
import router from "../../contants/router";
import InfoIcon from "../InfoIcon";
import {Link, useHistory} from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import useStyles from './home.style';
import {Context} from "../../context";


function Home() {
  const classes = useStyles();
  const history = useHistory();
  const [{userInfo: {nickname}}] = useContext(Context);
  const [inOrOut, setInOrOut] = useState(true);

  const handleOnWheel = useCallback((e) => {
    if (e.nativeEvent.deltaY > 0) {
      setInOrOut(false);
      setTimeout(() => {
        history.push(router.ARTICLES);
      }, 1000);
    }
  }, [history]);

  return (
    <div onWheel={handleOnWheel} className={classes.root}>
      <Grid container spacing={3} className={classes.infoWrapper}>
        <Slide timeout={1000} direction={'down'} in={inOrOut} mountOnEnter unmountOnExit>
          <Grid item className={classes.info}>
            <Typography component={"h1"}>
              Hi, {nickname}!
            </Typography>
            <Typography component={"h1"}>
              Welcome To My Blog!
            </Typography>
            <Typography component={"h1"}>
              欢迎来到我的博客!
            </Typography>
          </Grid>
        </Slide>
        <Slide timeout={1000} direction={'right'} in={inOrOut} mountOnEnter unmountOnExit>
          <Grid item>
            <InfoIcon spacing={50}/>
          </Grid>
        </Slide>

        <Slide timeout={1000} direction={'up'} in={inOrOut} mountOnEnter unmountOnExit>
          <Grid item>
            <Button
              component={Link}
              to={router.ABOUT}
              className={classes.aboutButton}
              variant="contained"
            >
              关于我
            </Button>
          </Grid>
        </Slide>
        {
          inOrOut && (
            <ExpandMoreButton
              component={Link}
              to={router.ARTICLES}
              className={classes.expendButton}
            />
          )
        }
        <div className={classes.bgPic}>
          <Slide timeout={1000} direction={'down'} in={inOrOut} mountOnEnter unmountOnExit>
            <img src={icon} alt=""/>
          </Slide>
        </div>
      </Grid>
    </div>
  );
}

export default React.memo(Home);
