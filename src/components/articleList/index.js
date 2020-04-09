import Articles from "./Articles";

import React, {useEffect, useState} from 'react';
import {http} from "../../hook";
import api from "../../contants/api";
import Loading from "../Loading";
import axios from '../../helpers/http';
import {useLocation} from "react-router-dom";
import {TYPE, useMethods} from "../../context";


function Index() {
  const [loading, setLoading] = useState(true);
  const [state, setState] = useMethods(TYPE.posts);

  const {search} = useLocation();
  const tags = search.match(/tags=([^&]*)&?/);

  useEffect(() => {
    const params = tags ? {tag: tags[1]} : {};
    axios.get(api.posts, {
      params
    }).then(res => {
      setState(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  }, [setState, tags]);

  const handleOnNextPage = () => {
    axios.get(api.post, {
      params: {page: state.page}
    }).then(res => {
      setState({
        page: state.page,
        content: state.content.concat(res.data.content)
      });
    }).catch(error => {
      console.log(error);
    });
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

