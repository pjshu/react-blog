import {useEffect, useState} from "react";
import axios from "./helpers/http";

export function useRequests(init, url, params) {
  const [state, setState] = useState(init);
  useEffect(() => {
    http.get(url, setState, params);
  }, [url, params]);
  return state;
}

export const http = {
  get(url, handleResult, params) {
    axios.get(url, {
      params: params
    }).then(res => {
      handleResult(res.data);
    }).catch(error => {
      console.log(error);
    });
  }
};
