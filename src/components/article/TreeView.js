import React, {useCallback, useEffect, useLayoutEffect, useMemo, useState} from "react";
import {Box, makeStyles, useMediaQuery, useTheme} from "@material-ui/core";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PanToolIcon from '@material-ui/icons/PanTool';
import Draggable from 'react-draggable';


const treeViewMaxWidth = 250;

const parseArticle = (article) => {
  const parseNode = (node) => {
    const getNodeLevel = (title) => {
      return title.replace('H', '');
    };
    return {
      title: node.innerText,
      id: node.id,
      level: parseInt(getNodeLevel(node.nodeName)),
      child: []
    };
  };
  const parser = new DOMParser();

  const doc = parser.parseFromString(article, 'text/html');
  const nodeList = doc.querySelectorAll('h1,h2,h3,h4,h5,h6');
  const nodes = Array.prototype.map.call(nodeList, (node) => {
    return parseNode(node);
  });
  const generateTree = () => {
    const tree = [];
    let parentIndex;
    let parentNode;
    nodes.forEach((node, index) => {
      parentIndex = index - 1;
      parentNode = nodes[parentIndex];
      while (parentNode && parentIndex >= 0 && node.level <= parentNode.level) {
        parentIndex--;
        parentNode = nodes[parentIndex];
      }
      parentIndex < 0 ?
        tree.push(node) :
        parentNode.child.push(node);
    });
    return tree;
  };
  return generateTree();
};


function TreeNode({nodes}) {
  if (nodes.length !== 0) {
    return (
      <>
        {
          nodes.map(node => (
            <ul key={node.id}>
              <li title={node.title} style={{
                fontWeight: 150 * (6 - node.level)
              }}>
                <p>
                  <a href={`#${node.id}`}>{node.title}</a>
                </p>
              </li>
              {
                node.child.length !== 0 && (
                  <li style={{
                    marginLeft: node.level * 5
                  }}>
                    <TreeNode nodes={node.child}/>
                  </li>
                )
              }
            </ul>
          ))
        }
      </>
    );
  }
  return <></>;
}


const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: ({position: {x}}) => x,
    top: ({position: {y}}) => y,
    '& a': {
      color: '#333333'
    },
    '& li': {
      // listStyleType: 'disc'
      listStyleType: 'none'
    },
    '& p': {
      lineHeight: '10px',
      whiteSpace: 'nowrap',
    }
  },
  tree: {
    borderRadius: 10,
    padding: 15,
    background: '#fff',
    minWidth: 200,
    maxWidth: treeViewMaxWidth,
    overflow: 'auto',
    display: ({open}) => {
      return open ? '' : 'none';
    },
  },
  icon: ({matches}) => matches ? {
    display: 'none'
  } : {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    color: '#D09FFE',
  },
  switch: {
    color: '#C186D6',
    position: 'fixed',
    right: 10,
    top: '50%',
    transform: 'translateY(-50%)',
  }
});

export default function TreeView({htmlString}) {
  const [position, setPosition] = useState(
    {
      x: window.innerWidth - (treeViewMaxWidth + 10),
      y: 100
    }
  );
  const theme = useTheme();
  // 不加{noSsr:true} 参数导致matches 默认为false, 渲染一次后才为真正的matches
  const matches = useMediaQuery(theme.breakpoints.down('xs'), {noSsr: true});

  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setPosition(position => ({
        x: window.innerWidth - (treeViewMaxWidth + 10),
        y: position.y
      }));
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);

  }, []);

  useEffect(() => {
    setOpen(!matches);
  }, [matches]);

  const handleOnClick = useCallback(() => {
    setOpen(open => !open);
  }, []);

  const classes = useStyles({open, position});

  const dictTree = useMemo(() => {
    return parseArticle(htmlString);
  }, [htmlString]);

  return (
    <>
      <div
        title={open ? '关闭目录' : '打开目录'}
        onClick={handleOnClick}
        className={classes.switch}
      >
        {
          open ?
            <VisibilityOffIcon/> :
            <VisibilityIcon/>
        }
      </div>
      <Draggable disabled={matches}>
        <div className={classes.root}>
          <Box boxShadow={8} component={'div'} className={classes.tree}>
            <div
              className={classes.icon}
              title={'可拖动'}
            >
              <PanToolIcon/>
            </div>
            <TreeNode nodes={dictTree}/>
            <div
              onClick={handleOnClick}
              title={'隐藏'}
              className={classes.icon}>
              <VisibilityOffIcon/>
            </div>
          </Box>
        </div>
      </Draggable>
    </>
  );
}
