import React from 'react';
import {TreeView} from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Container, Grid, makeStyles} from "@material-ui/core";
import {useRequests} from "../../hook";
import StyledTreeItem from './StyledTreeItem';
import api from '../../contants/api';

const useStyles = makeStyles({
  root: {
    minWidth: 450,
    padding: '0 40px 0 40px'
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
        <TreeView
          className={classes.tree}
          defaultCollapseIcon={<ExpandMoreIcon/>}
          defaultExpandIcon={<ChevronRightIcon/>}
        >
          {
            data.map(item => {
              const {date} = item;
              return (
                <StyledTreeItem
                  key={date}
                  nodeId={date}
                  labelText={date}
                  labelInfo={`${item.articles.length}篇`}
                >
                  {
                    item.articles.map(article => {
                      const {id, title} = article;
                      return <StyledTreeItem
                        key={id}
                        nodeId={id + ""}
                        {...{labelText: title, labelInfo: `${article.date}日`}}/>;
                    })
                  }
                </StyledTreeItem>);
            })
          }
        </TreeView>
      </Grid>
    </Container>
  );
}


