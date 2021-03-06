import React from 'react';
import {Container, Grid} from "@material-ui/core";
import MediaCard from "./MediaCard";
import ExpandMoreButton from "../ExpandMoreButton";
import useStyles from './tags.style';


function Tags({tags, handleOnNextPage}) {
  const classes = useStyles();
  return (
    <Container
      maxWidth={"lg"}
      className={classes.root}
    >
      <Grid
        spacing={8}
        justify={"center"}
        container
      >
        {
          tags.content.map((tag) => (
            <Grid key={tag.id} item>
              <MediaCard {...tag}/>
            </Grid>
          ))
        }
      </Grid>
      <div className={classes.extendBtn}>
        <ExpandMoreButton
          hidden={tags.bottom}
          onClick={handleOnNextPage}
        />
      </div>
    </Container>
  );
}

export default React.memo(Tags, (pre, next) => {
  return pre.handleOnNextPage === next.handleOnNextPage &&
    pre.tags.content.length === next.tags.content.length &&
    pre.tags.bottom === next.tags.bottom;
});

