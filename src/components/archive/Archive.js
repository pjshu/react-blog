import React from 'react';
import {TreeView} from '@material-ui/lab';
import {Container, Grid, makeStyles} from "@material-ui/core";
import {useRequests} from "../../hook";
import TreeItemWrapper from './TreeItemWrapper';
import api from '../../contants/api';

const useStyles = makeStyles({
  root: {

  },
  tree: {
    width: '100%',
  },
});

export default function Archive() {
  const classes = useStyles();
  const data = useRequests([], api.archive);
  return (
    <Container maxWidth={"md"}>
      <Grid container justify={"flex-start"} className={classes.root}>
        <TreeView className={classes.tree}>
          {
            data.map(item => {
              const {date} = item;
              return (
                <TreeItemWrapper
                  key={date}
                  nodeId={date}
                  labelText={date}
                  labelInfo={`${item.articles.length}篇`}
                >
                  {
                    item.articles.map(article => {
                      const {id, title} = article;
                      return <TreeItemWrapper
                        key={id}
                        nodeId={id + ""}
                        {...{labelText: title, labelInfo: `${article.date}日`}}/>;
                    })
                  }
                </TreeItemWrapper>);
            })
          }
        </TreeView>
      </Grid>
    </Container>
  );
}


