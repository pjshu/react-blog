import React from 'react';
import {Grid} from "@material-ui/core";
import {useRequests} from '../hook';
import ReactMarkdown from "react-markdown";
import GitHubIcon from '@material-ui/icons/GitHub';

function About() {
  const URL = `/api/user/about/`;
  const state = useRequests(URL);
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8}>
        <ReactMarkdown
          source={state.data}/>
      </Grid>
      <Grid>
        <a href="https://github.com/pjshu">
          <GitHubIcon/>
        </a>
      </Grid>
    </Grid>
  );
}

export default About;
