import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import api from '../contants/api';
import axios from "../helpers/http";
import 'braft-editor/dist/output.css';
import BraftEditor from '../config/editorConfig';
import Prism from "../config/prism";
import '../config/prism.css';
import '../config/table.css';
import purpleBg from "../icons/purpleBg.svg";
import blueBg from "../icons/blueBg.svg";

const useStyle = makeStyles(theme => ({
  root: {
    padding: '60px 25px 0px 25px',
    background: `
    url(${purpleBg}) no-repeat fixed left -10px top -40px,
    url(${blueBg}) no-repeat fixed center top -40px,
    url(${purpleBg}) no-repeat fixed right -80px top -50px,
    url(${blueBg}) no-repeat fixed right -20px bottom -50px,
    url(${purpleBg}) no-repeat fixed center bottom -40px`,
    backgroundSize: '150px, 100px, 300px, 200px, 100px',
    [theme.breakpoints.down("xs")]: {
      backgroundSize: 0,
    },
    [theme.breakpoints.only("sm")]: {
      backgroundSize: '100px, 100px, 200px, 150px,100px',
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
  const [state, setState] = useState({
    id: '',
    article: '',
    title: ''
  });
  useEffect(() => {
    axios.get(api.post, {
      params: {id}
    }).then(res => {
      const data = res.data;
      data.article = BraftEditor.createEditorState(data.article).toHTML();
      setState(data);
      Prism.highlightAll();
    }).catch(error => {
      console.log(error);
    });
  }, [id]);

  return (
    <Container maxWidth={"md"} className={classes.root}>
      <Grid container alignItems="center" direction={"column"}>
        <Typography
          component={'h1'}
          style={{
            letterSpacing:"10px",
            fontWeight:"bold",
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
          <div style={{maxWidth: '100%'}} dangerouslySetInnerHTML={{__html: state.article}}/>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Detail;
