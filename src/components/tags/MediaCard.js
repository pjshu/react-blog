import React, {useCallback} from 'react';
import {
  CardMedia,
  Typography,
  Card,
  CardActionArea,
  CardContent
} from '@material-ui/core';
import router from "../../contants/router";
import {useHistory} from "react-router-dom";
import useStyles from './mediaCard.style';

function MediaCard(props) {
  let {
    describe,
    image: {url},
    name
  } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = useCallback(() => {
    history.push({
      pathname: router.ARTICLES,
      search: `?tid=${props.id}`
    });
  }, [history, props.id]);

  return (
    <Card className={classes.root} onClick={handleOnClick}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography
            title={describe}
            noWrap={true}
            color="textSecondary"
          >
            {describe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default React.memo(MediaCard, (pre, next) => {
  return pre.id === next.id;
});
