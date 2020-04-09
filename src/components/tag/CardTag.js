import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import router from "../../contants/router";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 345
    // minWidth:300,
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const {
    describe,
    image: {url},
    name
  } = props;
  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = () => {
    history.push({
      pathname: router.ARTICLES,
      search: `?tid=${props.id}`
    });
  };

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
          <Typography variant="body2" color="textSecondary" component="p">
            {describe}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
