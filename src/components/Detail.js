import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Container, Grid, makeStyles} from "@material-ui/core";
import api from '../contants/api';
import axios from "../helpers/http";
import 'braft-editor/dist/output.css';
import BraftEditor from '../config/editorConfig';
import Prism from "../config/prism";
import '../config/prism.css';
import '../config/table.css';

const useStyle = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: 6
    },
  }
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
      <Grid container justify="center">
        <Grid>
          {state.title}
        </Grid>
        <Grid item style={{maxWidth: '100%'}}>
          <div style={{maxWidth: '100%'}} dangerouslySetInnerHTML={{__html: state.article}}/>
        </Grid>
      </Grid>
    </Container>
  );
}



export default Detail;
