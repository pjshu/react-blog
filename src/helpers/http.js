import axios from "axios";


let base = '/api/';
let localhost = 'http://127.0.0.1:5000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

if (process.env.NODE_ENV === 'development') {
  base = localhost + base;
} else {
  // 开发环境debug老时间超限,所以开发环境不设置超限时间
  axios.defaults.timeout = 16000;
}

axios.defaults.baseURL = base;

axios.interceptors.request.use(config => {
  //TODO
  return config;
}, error => {
  //TODO:请求超时
  return Promise.resolve(error);
});

axios.interceptors.response.use(res => {
  return res.data;
}, error => {
  const data = error.response;
  if (data) {
    const status = data.status;
    if (status === 401) {
      //TODO
    } else if (status === 401) {
      //TODO
    }
  }
  return Promise.resolve(error.response);
});


export default axios;
