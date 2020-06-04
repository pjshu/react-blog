import React, {useCallback, useMemo} from 'react';
import {Grid} from "@material-ui/core";
import CachedIcon from '@material-ui/icons/Cached';
import useStyles from './tags.style';
import {usePagingTags} from "../../hooks";
import {useHistory} from "react-router-dom";
import router from "../../contants/router";


const ColorTag = React.memo(function ColorTag(props) {
  const {id, name, count} = props;
  const classes = useStyles(id);
  const history = useHistory();
  const handleOnClick = useCallback(() => {
    history.push({
      pathname: router.ARTICLES,
      search: `?tid=${id}`
    });
  }, [history, id]);

  return (<div
    className={classes.root}
    onClick={handleOnClick}
  >
    <span>
      {name}
    </span>
    <span className={classes.count}>
     ({count})
    </span>
  </div>);
}, () => {
  return true;
});


export function Tags() {
  const classes = useStyles();
  const {tags: {content, rowsPerPage, bottom}, handleOnNextPage} = usePagingTags();

  const currentTags = useMemo(() => {
    return content.slice(-rowsPerPage);
  }, [content, rowsPerPage]);
  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      className={classes.colorTags}
    >
      {
        currentTags.map(tag => (
          <ColorTag
            value={tag.id}
            key={tag.id}
            {...{
              id: tag.id,
              count: tag.count,
              name: tag.name,
            }}/>
        ))
      }
      {
        bottom ? null :
          <CachedIcon onClick={handleOnNextPage}/>
      }
    </Grid>
  );
}

export default React.memo(Tags);
