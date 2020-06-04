import React from "react";
import useMethods from "use-methods";


export const defaultValue = {
  posts: {
    page: 0,
    content: [],
    bottom: false,
    rowsPerPage: 1,
    // 记录已经抓取的页面
    fetchedPage: []
  },
  allTags: [],
  post: {
    id: '',
    article: '',
    title: '',
    comments: 0,
    change_date: new Date().getTime(),
    // background_image: ''
  },
  tags: {
    // 缓存已经请求的页面
    page: 0,
    content: [],
    bottom: false,
    rowsPerPage: 1,
    fetchedPage: [],
  },
  userInfo: {
    avatar: '',
    about: '',
    nickname: '',
    icp: '',
    articleCount: '',
    tagsCount: '',
    motto: ''
    // github: '',
    // twitter: '',
    // email: '',
    //备案号
  },
  messageBar: {
    open: false,
    message: ''
  }
};

export const Context = React.createContext();

export const methods = (state) => ({
  setContent: ({content, source}) => {
    source = state[source];
    source.content = [...source.content, ...content];
  },
  setBottom: (source) => {
    state[source].bottom = true;
  },
  setAllTags: (data) => {
    state.allTags = data;
  },
  incrementPage: (source) => {
    state[source].page++;
  },
  setFetchedPage: (source) => {
    state[source].fetchedPage = [...state[source].fetchedPage, state[source].page];
  },
  setPost: (data) => {
    state.post = {...state.post, ...data};
  },
  setUserInfo: (data) => {
    state.userInfo = {...state.userInfo, ...data};
  },
  setMessageBar: (data) => {
    state.messageBar = {...state.messageBar, ...data};
  }
});


export default React.memo(function Provider({children}) {
  const [state, dispatch] = useMethods(methods, defaultValue);
  return (
    <Context.Provider value={[state, dispatch]}>
      {children}
    </Context.Provider>
  );
});
