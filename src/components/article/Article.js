import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Container, Grid, makeStyles, Typography, Paper} from "@material-ui/core";
import api from '../../contants/api';
import axios from "../../helpers/http";
import 'braft-editor/dist/output.css';
import Prism from "../../config/prism";
import '../../config/prism.css';
import '../../config/table.css';
import bg from '../../icons/articleBg.png';
import {useMethods, TYPE} from "../../context";

const useStyle = makeStyles(theme => ({
  root: {
    padding: '60px 25px 0px 25px',
    marginTop: -400,
    [theme.breakpoints.down("xs")]: {
      marginTop: -200,
      padding: '25px 10px 0px 10px',
      // backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      // backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
  },
  backgroundPic: {
    height: 800,
    background: `url(${bg}) no-repeat`,
    backgroundSize: '100%',
    [theme.breakpoints.down("xs")]: {
      height: 400,
      // marginTop: -200,
      // backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      // backgroundSize: '100px, 100px, 200px, 150px,100px',
    },
  },
  articleInfo: {
    display: 'flex',
    direction: 'row',
    '& > *': {
      margin: '20px 0px 0px 20px',
      [theme.breakpoints.down("sm")]: {
        margin: '20px 10px 5px 0',
      },
    },
  },
}));

function Detail() {
  const classes = useStyle();
  const {id} = useParams();
  const [state, setState] = useMethods(TYPE.post);

  useEffect(() => {
    axios.get(api.post, {
      params: {id}
    }).then(res => {
      const data = res.data;
      setState(data);
      Prism.highlightAll();
    }).catch(error => {
      console.log(error);
    });
  }, [id, setState]);

  return (
    <>
      <div className={classes.backgroundPic}/>
      <Container component={Paper} maxWidth={"lg"} className={classes.root}>
        <Grid container alignItems="center" direction={"column"}>
          <Typography
            component={'h1'}
            style={{
              letterSpacing: "10px",
              fontWeight: "bold",
              fontSize: '30px',
              background: 'linear-gradient(135deg, #CB88D2, #7F75EE)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}
          >
            {state.title}
          </Typography>
          <Grid className={classes.articleInfo}>
            <Typography
              component="h4"
              align="left">
              2019/10/2 12:50
            </Typography>
            <Typography>
              0评论
            </Typography>
          </Grid>
          <Grid item style={{maxWidth: '100%'}}>
            <div
              style={{maxWidth: '100%'}}
              dangerouslySetInnerHTML={{__html: state.article}}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}


export default Detail;
