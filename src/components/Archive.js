import React, {useState} from 'react';
import {Collapse, Container, Grid} from '@material-ui/core';
import ts from '../icons/ts.svg';

const test = [
  {
    "date": "2019-1",
    "articles": [
      {
        "id": 1,
        "title": "并发编程",
        "date": "1"
      },
      {
        "id": 2,
        "title": "搜索引擎查询",
        "date": "2"
      },
      {
        "id": 4,
        "title": "dns字典爆破",
        "date": "3"
      }
    ]
  },
  {
    "date": "2019-2",
    "articles": [
      {
        "id": 5,
        "title": "sql学习笔记(day1)",
        "date": "1"
      },
      {
        "id": 6,
        "title": "记录一些python小窍门",
        "date": "1"
      },
      {
        "id": 7,
        "title": "绕过验证码爬取学校cms",
        "date": "1"
      }
    ]
  }, {
    "date": "2019-3",
    "articles": [
      {
        "id": 5,
        "title": "sql学习笔记(day1)",
        "date": "1"
      },
      {
        "id": 6,
        "title": "记录一些python小窍门",
        "date": "1"
      },
      {
        "id": 7,
        "title": "绕过验证码爬取学校cms",
        "date": "1"
      }
    ]
  }
];


function TreeItem({date, articles}) {
  const [hidden, setHidden] = useState(false);
  const handleOnClick = () => {
    setHidden(!hidden);
  };
  return (
    <li onClick={handleOnClick}>
      <h2>{date}</h2>
      <Collapse in={hidden} component={'ul'}>
        {
          articles.map(item => (
            <li key={item.id} style={{
              fontSize: '20px',
              lineHeight: '40px'
            }}>
              <span style={{
                display: 'inline-block',
                fontWeight: 'bold',
                width: '50px'
              }}>
                {item.date}日)
              </span>
              <span style={{
                fontWeight: 'bold'
              }}>
                {item.title}
              </span>
            </li>
          ))
        }

      </Collapse>
    </li>
  );
}


function Archive() {
  return (
    <Container
      maxWidth={"md"}
      style={{
        padding: 20,
        minHeight: '100%',
        background: `url(${ts}) no-repeat fixed center center`,
        backgroundSize: 800
      }}>
      <Grid
        style={{
          height: '100%',
          padding: '80px 40px 40px 40px',
        }}>
        <ul>
          {
            test.map(item => (
              <TreeItem key={item.date} {...item}/>
            ))
          }
        </ul>
      </Grid>

    </Container>
  );
}

export default Archive;

