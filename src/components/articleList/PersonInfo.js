import React from 'react';
import {Avatar, List, ListItem, makeStyles} from "@material-ui/core";
import InfoIcon from "../button/InfoIcon";

const useStyle = makeStyles({
  root: {
    marginTop: 50,
    position: 'relative',
    '& > :first-child': {
      height: 400,
      width: 300,
      background: '#F5F5F5',
      borderRadius: 16,
    }
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',

    height: 300,
    width: 280,
    background: '#fff',
    borderRadius: 16,
    position: 'absolute',
    bottom: 90,
    right: 20,
    boxShadow: '0 0 30px rgba(16,14,23,0.25)',
  },
  avatar: {
    width: 120,
    height: 120,
  },
  list: {
    '& > *': {
      display: "flex",
      justifyContent: "center",
      marginTop: 8
    }
  },
});

function PersonInfo() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            top: 320,
            position: 'relative',
            height: '80px'
          }}>
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              19
            </div>
            <div>文章</div>
          </div>
          <div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              8
            </div>
            <div>
              标签
            </div>
          </div>
        </div>
      </div>
      <div className={classes.wrapper}>
        <List className={classes.list}>
          <ListItem>
            <Avatar className={classes.avatar} src="https://shushugo.com/uploads/avatar.jpg"/>
          </ListItem>
          <ListItem>pjs</ListItem>
          <ListItem>学得越多,却发现自己懂得越少</ListItem>
          <ListItem><InfoIcon justify={'center'} spacing={50}/></ListItem>
        </List>
      </div>
    </div>
  );
}

export default PersonInfo;
