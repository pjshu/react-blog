import {useEffect, useState} from "react";
import axios from "./helpers/http";

export function useRequests(init, url, params) {
  const [state, setState] = useState(init);
  useEffect(() => {
    axios.get(url, {
      params: params
    }).then(res => {
      setState(res.data);
    }).catch(error => {
      console.log(error);
    });
  }, [url]);
  return state;
}
