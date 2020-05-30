import React from "react";
import useMethods from "use-methods";


export const defaultValue = {
  posts: {
    page: 0,
    content: [],
    bottom: false,
    rowsPerPage: 8
  },
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
    rowsPerPage: 8
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
  combinePostsContent: (content) => {
    state.posts.content = [...state.posts.content, ...content];
  },
  setPostsContent: (data) => {
    state.posts.content = [...data];
  },
  setPostsBottom: () => {
    state.posts.bottom = true;
  },
  incrementPostsPage: () => {
    state.posts.page++;
  },
  setTagsContent: (content) => {
    state.tags.content = [...content];
  },
  setTagsBottom: () => {
    state.tags.bottom = true;
  },
  incrementTagsPage: () => {
    state.tags.page++;
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
