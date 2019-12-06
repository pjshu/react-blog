import React from 'react';
import {TreeView} from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {Grid,makeStyles} from "@material-ui/core";
import {useRequests} from "../hook";
import Brightness5RoundedIcon from '@material-ui/icons/Brightness5Rounded';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import StyledTreeItem from './StyledTreeItem';

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 450,
  },
});

export default function Archive() {
  const classes = useStyles();
  const URL = '/api/archive/';
  const data = useRequests(URL);
  return (
    <Grid container justify="center">
      <TreeView
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon/>}
        defaultExpandIcon={<ChevronRightIcon/>}
      >
        <TreeItems data={data}/>
      </TreeView>
    </Grid>
  );
}

const SEASON = {
  spring: {icon: LocalFloristIcon, color: "#3c8039"},
  summer: {icon: Brightness5RoundedIcon, color: "#e3742f"},
  autumn: {icon: EcoOutlinedIcon, color: "#a250f5"},
  winter: {icon: AcUnitIcon, color: "#1a73e8"}
};
const chooseSeason = (date) => {
  const month = parseInt(date.split("-")[1]);
  switch (month) {
    case 2:
    case 3:
    case 4:
      return SEASON.spring;
    case 5:
    case 6:
    case 7:
      return SEASON.summer;
    case 8:
    case 9:
    case 10:
      return SEASON.autumn;
    case 11:
    case 12:
    case 1:
      return SEASON.winter;
    default:
      return;
  }
};
const TreeItems = (props) => {
  /**
   * @param data
   * @param data.date
   * @param data[].title
   * @param data[].articles
   * @param data[].date
   * @returns ReactDOM
   */
  let {data} = props;
  return data ?
    (
      data.map(item => {
        const {date} = item;
        const season = chooseSeason(date);
        return (<StyledTreeItem
          key={date}
          nodeId={date}
          labelText={date}
          labelIcon={season.icon}
          labelInfo={`count:　${item.articles.length}`}
          color={season.color}
          bgColor="#f3e8fd">
          {
            item.articles.map(article => {
              const {id, title} = article;
              return <StyledTreeItem
                key={id}
                nodeId={id + ""}
                labelText={title}
                labelIcon={season.icon}
                labelInfo={`data:　${article.date}`}
                color={season.color}
                bgColor="#f3e8fd"/>;
            })
          }
        </StyledTreeItem>);
      })
    )
    : null;
};



