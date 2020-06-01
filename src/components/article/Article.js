import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import useEditorStyle from '../../style/output.style';
import useStyle from './article.style';
import {formatTime} from "../../helpers/datetime";
import {combineClassName} from '../../helpers/style';
import TreeView from "./TreeView";


function Detail(post) {
  const editorCSS = useEditorStyle();
  const classes = useStyle();

  return (
    <>
      <div className={classes.backgroundPic}/>
      <Container component={Paper} maxWidth={"lg"} className={classes.root}>
        <div className={classes.titleWrapper}>
          <Typography
            component={'h1'}
            className={classes.title}
          >
            {post.title}
          </Typography>
        </div>
        <div className={classes.articleInfo}>
          <Typography
            className={classes.create_time}
            variant={'body1'}
            align="left"
          >
            {formatTime(post.change_date, 'second')}
          </Typography>
          <Typography
            variant={'body1'}
            className={classes.comments}
          >
            {post.comments}评论
          </Typography>
        </div>
        <Grid item>
          {
            post.article ? (
              <div
                className={combineClassName(editorCSS.root, editorCSS.table, editorCSS.emoji)}
                dangerouslySetInnerHTML={{__html: post.article}}
              />
            ) : '什么都没有(。-`ω´-)'
          }
        </Grid>
        <TreeView htmlString={post.article}/>
      </Container>
    </>
  );
}


export default React.memo(Detail, (pre, next) => {
  return pre.id === next.id;
});
