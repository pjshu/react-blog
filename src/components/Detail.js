import React from "react";
import {useParams} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import {useRequests} from '../hook';
import CodeBlock from './CodeBlock';
import api from '../contants/api'

function Detail() {
  const {id} = useParams();
  const state = useRequests(`${api.post}${id}`);
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <ReactMarkdown source={state.contents} renderers={{code: CodeBlock}}/>
      </Grid>
    </Grid>
  );
}


export default Detail;
