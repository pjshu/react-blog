import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import api from '../contants/api';
import axios from "../helpers/http";
import BraftEditor from "../config/editorConfig";
import 'braft-editor/dist/output.css';

function About() {
  const [state, setState] = useState({
    about: ''
  });
  useEffect(() => {
    axios.get(api.about).then(res => {
      const data = res.data;
      data.about = BraftEditor.createEditorState(data.about).toHTML();
      setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <div style={{maxWidth: '100%'}} dangerouslySetInnerHTML={{__html: state.about}}/>
      </Grid>
    </Grid>
  );
}

export default About;
