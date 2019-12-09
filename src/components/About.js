import React from 'react';
import {Grid} from "@material-ui/core";
import {useRequests} from '../hook';
import ReactMarkdown from "react-markdown";
import GitHubIcon from '@material-ui/icons/GitHub';
import api from '../contants/api'

function About() {
  const state = useRequests(api.about);
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
