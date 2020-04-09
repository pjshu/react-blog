import React, {useState} from 'react';
import {Grid, makeStyles, Typography} from "@material-ui/core";
import ExpandMore from '../button/ExpandMore';
import icon from '../../icons/home.svg';
import router from "../../contants/router";
import InfoIcon from "../button/InfoIcon";
import SquareBtn from "../button/SquareBtn";
import {useHistory} from "react-router-dom";
import Slide from '@material-ui/core/Slide';
import {TYPE, useMethods} from "../../context";


const useStyle = makeStyles(theme => ({
  infoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    paddingLeft: '100px',
    width: '50%',
    [theme.breakpoints.only("xs")]: {
      width: '100%',
      alignItems: 'center',
      paddingLeft: '0px',
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: '20vw',
    },
  },
  info: {
    width: '100%',
    '& > *': {
      fontWeight: 'bold',
      fontSize: '35px',
      [theme.breakpoints.only("xs")]: {
        alignItems: 'center',
        flexDirection: 'column',
        display: 'flex',
        justifyItems: 'center',
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: '25px',
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: '40px',
      },
    }
  },
  bgPic: {
    position: "absolute",
    right: 0,
    top: '50%',
    transform: "translate(0%, -55%)",
    zIndex: '-10',
    '& > img': {
      height: '600px'
    },
    [theme.breakpoints.down("xs")]: {
      display: 'none'
    },
    [theme.breakpoints.only("sm")]: {
      '& > img': {
        height: '400px'
      },
    },
    [theme.breakpoints.up("lg")]: {
      right: '5vw',
    },
  }
}));


function Home() {
  const classes = useStyle();
  const history = useHistory();
  const [inOrOut, setInOrOut] = useState(true);

  const handleOnWheel = (e) => {
    if (e.nativeEvent.deltaY > 0) {
      setInOrOut(false);
      setTimeout(() => {
        history.push(router.ARTICLES);
      }, 1000);
    }
  };

  return (
    <Grid onWheel={handleOnWheel} className={classes.root}>
      <Grid container spacing={3} className={classes.infoWrapper}>
        <Slide timeout={1000} direction={'down'} in={inOrOut} mountOnEnter unmountOnExit>
          <Grid item className={classes.info}>
            <Typography component={"h1"}>
              Hi, PJShu!
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
            <SquareBtn label={"关于我"} to={router.ABOUT}/>
          </Grid>
        </Slide>

        <ExpandMore
          style={{
            display: inOrOut ? '' : 'none'
          }}
          absolute {...{to: router.ARTICLES}}
        />

        <Grid className={classes.bgPic}>
          <Slide timeout={1000} direction={'down'} in={inOrOut} mountOnEnter unmountOnExit>
            <img src={icon} alt=""/>
          </Slide>
        </Grid>

      </Grid>
    </Grid>
  );
}

export default Home;
