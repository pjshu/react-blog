import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import api from '../contants/api';
import axios from "../helpers/http";
import 'braft-editor/dist/output.css';
import BraftEditor from '../config/editorConfig';
import Prism from "../config/prism";
import '../config/prism.css';
import '../config/table.css';
import {Container} from "@material-ui/core";

function Detail() {
  const {id} = useParams();
  const [state, setState] = useState({
    id: '',
    contents: '',
    title: ''
  });
  useEffect(() => {
    axios.get(api.post, {
      params: {postId: id}
    }).then(res => {
      const data = res.data;
      data.contents = BraftEditor.createEditorState(data.contents).toHTML();
      setState(data);
      Prism.highlightAll();
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Container maxWidth={"md"}>
      <Grid container justify="center">
        <Grid item>
          <div dangerouslySetInnerHTML={{__html: state.contents}}/>
        </Grid>
      </Grid>
    </Container>
  );
}


export default Detail;
