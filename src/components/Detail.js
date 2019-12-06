import React from "react";
import {useParams} from 'react-router-dom';
import {Grid} from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import {useRequests} from '../hook';
import CodeBlock from './CodeBlock';

function Detail() {
  const {id} = useParams();
  const URL = `/api/posts/${id}`;
  const state = useRequests(URL);
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <ReactMarkdown source={state.contents} renderers={{code: CodeBlock}}/>
      </Grid>
    </Grid>
  );
}


export default Detail;
