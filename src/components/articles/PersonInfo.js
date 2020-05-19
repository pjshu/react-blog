import React, {useContext} from 'react';
import {Avatar, List, ListItem} from "@material-ui/core";
import InfoIcon from "../InfoIcon";
import useStyles from './personInfo.style';
import {Context} from "../../context";
import {Link} from 'react-router-dom';
import router from '../../contants/router';

function PersonInfo() {
  const classes = useStyles();
  const [{
    userInfo: {
      avatar,
      nickname,
      articleCount,
      tagsCount,
      motto
    }
  }] = useContext(Context);
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.blogExcerpt}>
          <Link to={router.ARTICLES}>
            <div className={classes.articleCount}>
              {articleCount}
            </div>
            <div>文章</div>
          </Link>
          <Link to={router.TAG}>
            <div className={classes.tagCount}>
              {tagsCount}
            </div>
            <div>
              标签
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.wrapper}>
        <List className={classes.list}>
          <ListItem>
            <Avatar className={classes.avatar} src={avatar}/>
          </ListItem>
          <ListItem>{nickname}</ListItem>
          <ListItem>{motto}</ListItem>
          <ListItem><InfoIcon justify={'center'} spacing={50}/></ListItem>
        </List>
      </div>
    </div>
  );
}

export default React.memo(PersonInfo);
