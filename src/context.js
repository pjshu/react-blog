import React from "react";


export const defaultValue = {
  posts: {
    page: 1,
    content: []
  },
  post: {
    id: '',
    article: '',
    title: '',
    // background_image: ''
  },
  tags: {
    page: 1,
    content: []
  },
  userInfo: {
    avatar: '',
    about: '',
    github: '',
    twitter: '',
    email: '',
    ICP: '',
  },
};

export const Context = React.createContext();

export const TYPE = {
  posts: 'posts',
  tags: 'tags',
  post: 'post',
  userInfo: 'userInfo'
};

const generateAction = (name) => {
  return (value) => ({
    type: TYPE[name],
    ...value,
  });
};


export const useMethods = (name) => {
  const {dispatch, state: {[name]: state}} = React.useContext(Context);
  const action = React.useMemo(() => {
    return generateAction(name);
  }, [name]);

  const myAction = React.useCallback((value) => {
    dispatch(action(value));
  }, [action, dispatch]);
  return [state, myAction];
};

export function reducer(state, action) {
  const {type, ...data} = action;
  switch (type) {
    case TYPE.posts:
      return {
        ...state,
        posts: {
          page: data.page,
          content: [...state.posts.content, ...data.content]
        }
      };
    case TYPE.tags:
      return {
        ...state,
        tags: {
          page: data.page,
          content: [...state.tags.content, ...data.content]
        }
      };
    case TYPE.post:
      return {
        ...state,
        post: {...state.post, ...data}
      };
    case TYPE.userInfo:
      return {
        ...state,
        userInfo: {...state.userInfo, ...data}
      };
    default:
      throw new Error();
  }
}

