import {Context} from './context';
import React, {useCallback, useContext, useEffect, useMemo} from "react";
import axios from './helpers/http';
import api from './contants/api';
import {useQuery} from "react-query";
import {useLocation, useParams} from "react-router-dom";

//axios hook封装
const useQueryToo = (api, handleResult, params = {}) => {
  const getData = useCallback(async () => {
    const {data} = await axios.get(api, {params});
    return data;
  }, [api, params]);
  const {status, data} = useQuery(params && [api, params], getData);
  useEffect(() => {
    if (status === 'success') {
      handleResult(data);
    }
  }, [data, handleResult, status]);
};

// 请求用户信息hook
export const useQueryUserInfo = () => {
  const [, {setUserInfo}] = useContext(Context);
  const handleResult = useCallback((data) => {
    setUserInfo(data);
  }, [setUserInfo]);
  useQueryToo(api.userInfo, handleResult);
};

//请求文章hook
export const useQueryPost = () => {
  const {id} = useParams();
  const params = useMemo(() => {
    return {id};
  }, [id]);

  const [{post}, {setPost}] = useContext(Context);
  const handleOnResult = useCallback((data) => {
    setPost(data);
  }, [setPost]);
  useQueryToo(api.post, handleOnResult, params);
  return {post};
};

// 请求文章列表hook,提供分页功能
export const useQueryPosts = () => {
  const [{posts}, {
    setPostsContent,
    setMessageBar,
    setPostsBottom,
    combinePostsContent,
    incrementPostsPage
  }] = useContext(Context);
  const {search} = useLocation();

  const params = useMemo(() => {
    const tags = search.match(/tid=([^&]*)&?/);
    const search_ = search.match(/search=([^&]*)&?/);
    const param = tags ? {filter: {tid: tags[1]}} : {};
    if (search_) {
      param.search = search_[1];
    }
    param.pageSize = posts.rowsPerPage;
    param.page = posts.page;
    return param;
  }, [posts.page, posts.rowsPerPage, search]);


  const handleReachBottom = useCallback(() => {
    setPostsBottom();
    setMessageBar({
      open: true,
      message: '已经到底部了哦 ◔ ‸◔'
    });
  }, [setMessageBar, setPostsBottom]);

  const handleResult = useCallback(({content: data}) => {
    if (Object.keys(data).length !== 0) {
      // 防止路由跳转后合并相同的数据
      posts.page === 0 ?
        setPostsContent(data) :
        combinePostsContent(data);
    } else {
      handleReachBottom();
    }
  }, [combinePostsContent, handleReachBottom, posts.page, setPostsContent]);

  const handleOnNextPage = useCallback(() => {
    incrementPostsPage();
  }, [incrementPostsPage]);

  useQueryToo(api.posts, handleResult, params);
  return {posts, handleOnNextPage};
};

// 请求标签hook,提供分页功能
export const useQueryTags = () => {
  const [{tags}, {
    setTagsContent,
    setMessageBar,
    setTagsBottom,
    incrementTagsPage
  }] = useContext(Context);

  const handleReachBottom = useCallback(() => {
    setTagsBottom();
    setMessageBar({
      open: true,
      message: '已经到底部了哦 ◔ ‸◔'
    });
  }, [setMessageBar, setTagsBottom]);

  const isBottom = useMemo(() => {
    return tags.page > tags.content.length / tags.rowsPerPage;
  }, [tags.content.length, tags.page, tags.rowsPerPage]);

  const handleOnNextPage = React.useCallback(() => {
    if (isBottom) {
      handleReachBottom();
    } else {
      incrementTagsPage();
    }
  }, [handleReachBottom, incrementTagsPage, isBottom]);

  const handleResult = useCallback(({content}) => {
    if (content.length <= tags.rowsPerPage) {
      handleReachBottom();
    }
    setTagsContent(content);
  }, [handleReachBottom, setTagsContent, tags.rowsPerPage]);

  useQueryToo(api.tags, handleResult);
  return {tags, handleOnNextPage};
};

