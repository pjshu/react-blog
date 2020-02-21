import React, {useState} from 'react';
import {Collapse,Container} from '@material-ui/core';

function TreeItem({year, date, title}) {
  const [hidden, setHidden] = useState(false);
  const handleOnClick = () => {
    setHidden(!hidden);
  };
  return (
    <li onClick={handleOnClick}>
      <h2>{year}</h2>
      <Collapse in={hidden} component={'ul'}>
        <li>
          {date}
          {title}
        </li>
        <li>
          {date}
          {title}
        </li>
      </Collapse>
    </li>
  );
}


function Test() {
  return (
    <Container maxWidth={"md"}  style={{padding:'40px'}}>
      <ul>
        <TreeItem {...{year: '2019-2', date: '1', title: '标题'}}/>
        <TreeItem {...{year: '2019-2', date: '1', title: '标题'}}/>
        <TreeItem {...{year: '2019-2', date: '1', title: '标题'}}/>
        <TreeItem {...{year: '2019-2', date: '1', title: '标题'}}/>
        <TreeItem {...{year: '2019-2', date: '1', title: '标题'}}/>
      </ul>
    </Container>
  );
}

export default Test;
