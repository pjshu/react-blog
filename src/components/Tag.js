import React from 'react';
import {useRequests} from '../hook';
import Grid from "@material-ui/core/Grid";

function Tag() {
  const URL = '/api/tags/';
  const data = useRequests(URL);
  if (data) {
    data.forEach(tag => {
      console.log(tag.name);
      tag.article.forEach(article => {
        console.log(article.title)
      })
    });
  }
  return (
    <Grid container justify="center">
      tags
    </Grid>
  );
}

export default Tag;
