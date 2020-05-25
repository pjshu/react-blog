import React,{useCallback} from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import useEditorStyle from '../../style/output.style';
import useStyle from './article.style';
import {formatTime} from "../../helpers/datetime";
import {combineClassName} from '../../helpers/style';
import TreeView from "./TreeView";
import {Provider, Editor, Comments} from 'material-comment-system';
import {initData, newData} from "./mock";


function Detail(post) {
  const editorCSS = useEditorStyle();
  const classes = useStyle();
const initApi = useCallback(() => new Promise((resolve) => {
    setTimeout(() => {
      // mock fetch data
      resolve(initData);
    }, 500);
  }), []);

  const loadMoreAPi = useCallback(() => new Promise(resolve => {
    setTimeout(() => {
      resolve(newData);
    }, 500);
  }), []);

  const submitApi = useCallback((data) => {
    console.log('submit data', data);
    //post data
  }, []);

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
        <Grid className={classes.articleInfo}>
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
        </Grid>
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
        <div>
          <Provider>
            <Editor submitApi={submitApi}/>
            <Comments initApi={initApi} loadMoreAPi={loadMoreAPi}/>
          </Provider>
        </div>
      </Container>
    </>
  );
}


export default React.memo(Detail, (pre, next) => {
  return pre.id === next.id;
});
