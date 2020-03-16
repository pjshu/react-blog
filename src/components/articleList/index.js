import Articles from "./Articles";

import React, {useEffect, useState} from 'react';
import {http} from "../../hook";
import api from "../../contants/api";
import Loading from "../Loading";
import axios from '../../helpers/http';

function Index() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    current_page: 1,
    content: []
  });
  useEffect(() => {
    axios.get(api.posts).then(res => {
      setState(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const handleOnNextPage = () => {
    const handleResult = (res) => {
      setState({
        current_page: state.current_page,
        content: state.content.concat(res.content)
      });
    };
    http.get(api.posts, handleResult, {current_page: 1});
  };

  return (
    <div>
      {
        loading ?
          <Loading/> :
          <Articles {...{state, handleOnNextPage}}/>
      }
    </div>
  );
}

export default Index;

