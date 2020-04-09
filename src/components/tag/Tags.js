import React from 'react';
// import {useRequests} from '../../hook';
import api from '../../contants/api';
import {Container, Grid} from "@material-ui/core";
// import ColorTag from './ColorTag'
import CardTag from "./CardTag";
import p1 from '../../icons/testIcon/1.png';
import ExpandMore from "../button/ExpandMore";
import axios from '../../helpers/http';
import {http} from "../../hook";
import {useHistory} from 'react-router-dom';
import router from '../../contants/router';
import {TYPE, useMethods} from "../../context";


function Tags() {
  const [state, setState] = useMethods(TYPE.tags);
  React.useEffect(() => {
    axios.get(api.tag).then(res => {
      console.log(res.data);
      setState(res.data);
    });
  }, [setState]);

  const handleOnNextPage = () => {
    axios.get(api.tag, {
      params: {
        page: state.page
      }
    }).then(res => {
      setState(res.data);
    });
  };

  return (
    <Container maxWidth={"lg"} style={{padding: '120px 40px 40px 40px'}}>
      <Grid
        spacing={8}
        justify={"center"}
        container
      >
        {
          state.content.map(item => (
            <Grid item key={item.id}>
              <CardTag {...item}/>
            </Grid>
          ))
        }
      </Grid>
      <div
        style={{
          marginTop: 40,
          display: 'flex',
          justifyContent: 'center',
          width: '100%'
        }}>
        <ExpandMore onClick={handleOnNextPage}/>
      </div>

    </Container>
  );
}

export default Tags;

