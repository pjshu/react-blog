import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import PersonInfo from './PersonInfo';
import Tags from './Tags';
import ExpandMoreButton from '../ExpandMoreButton';
import ArticleCard from './ArticleCard';
import useStyles from './articles.style';
import {Context} from "../../context";

function Articles({posts, handleOnNextPage}) {
  const classes = useStyles();
  const [{posts: {rowsPerPage}}] = useContext(Context);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction={"row"}
        justify={"center"}
      >
        <Grid item xl={5} lg={6} md={8} sm={10} xs={12}>
          {
            posts.content.map((item) => (
              <ArticleCard key={item.id} {...item}/>
            ))
          }
        </Grid>
        <Grid item className={classes.personInfo}>
          <PersonInfo/>
          <Tags/>
        </Grid>
      </Grid>
      <div className={classes.extendBtnWrapper}>
        <ExpandMoreButton
          className={classes.extendButton}
          hidden={posts.bottom || posts.content.length < rowsPerPage}
          onClick={handleOnNextPage}
        />
      </div>
    </div>
  );
}

export default React.memo(Articles, (pre, next) => {
  return pre.handleOnNextPage === next.handleOnNextPage &&
    pre.posts.content.length === next.posts.content.length &&
    pre.posts.bottom === next.posts.bottom;
});
