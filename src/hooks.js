import {Context} from './context';
import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import axios from './helpers/http';
import api from './contants/api';
import {useQuery, queryCache} from "react-query";
import {useLocation, useParams} from "react-router-dom";
import router from './contants/router.json';

//axios hook封装
const useQueryToo = (api, handleResult, params = {}, cancel = false) => {
  const getData = useCallback(async () => {
    const {data} = await axios.get(api, {params});
    return data;
  }, [api, params]);


  const {status, data} = useQuery([api, params], getData);

  if (cancel) {
    queryCache.cancelQueries([api, params]);
  }

  useEffect(() => {
    console.log(cancel, status);
    if (!cancel && status === 'success') {
      handleResult(data);
    }
  }, [cancel, data, handleResult, status]);
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

const usePostParams = () => {
  const [{posts}] = useContext(Context);
  const {search} = useLocation();
  return useMemo(() => {
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
};

const useReachBottom = (source, message = true) => {
  const [, {
    setMessageBar,
    setBottom,
  }] = useContext(Context);
  return useCallback(() => {
    setBottom(source);
    if (message) {
      setMessageBar({
        open: true,
        message: '已经到底部了哦 ◔ ‸◔'
      });
    }
  }, [setBottom, source, message, setMessageBar]);
};

const useCancelRequest = (source) => {
  const [{[source]: data}] = useContext(Context);
  return useMemo(() => {
    return data.fetchedPage.includes(parseInt(data.page));
  }, [data.fetchedPage, data.page]);
};

// 请求文章列表hook,提供分页功能
export const useQueryPosts = () => {
  const [{posts}, {
    setContent,
    incrementPage,
    setFetchedPage
  }] = useContext(Context);
  const params = usePostParams();

  const handleReachBottom = useReachBottom('posts');
  const cancel = useCancelRequest('posts');

  const handleResult = useCallback(({content}) => {
    if (content.length !== 0) {
      setContent({content, source: 'posts'});
      setFetchedPage('posts');
    }
    if (content.length < posts.rowsPerPage) {
      handleReachBottom();
    }
  }, [handleReachBottom, posts.rowsPerPage, setContent, setFetchedPage]);

  const handleOnNextPage = useCallback(() => {
    incrementPage('posts');
  }, [incrementPage]);

  useQueryToo(api.posts, handleResult, params, cancel);
  return {posts, handleOnNextPage};
};

const useQueryTags = () => {
  const [{allTags}, {setAllTags}] = useContext(Context);
  const cancel = useMemo(() => allTags.length !== 0, [allTags.length]);
  const handleResult = useCallback(({content}) => {
    setAllTags(content);
  }, [setAllTags]);
  useQueryToo(api.tags, handleResult, {}, cancel);
};

// 请求标签hook,提供分页功能
export const usePagingTags = () => {
  useQueryTags();
  const {pathname} = useLocation();
  const [{tags, allTags}, {
    setContent,
    incrementPage,
    setFetchedPage
  }] = useContext(Context);

  const handleReachBottom = useReachBottom('tags', pathname === router.TAG);
  const cancel = useCancelRequest('tags');
  const handleOnNextPage = useCallback(() => {
    incrementPage('tags');
  }, [incrementPage]);

  useEffect(() => {
    if (!cancel && allTags.length !== 0) {
      const newTags = allTags.slice(tags.page * tags.rowsPerPage, (tags.page + 1) * tags.rowsPerPage);
      setContent({source: 'tags', content: newTags});
      // 发送到达底部的消息
      if (allTags.length !== 0 && newTags.length < tags.rowsPerPage) {
        handleReachBottom();
      }
      if (newTags.length !== 0) {
        setFetchedPage('tags');
      }
    }
  }, [allTags, handleReachBottom, incrementPage, setContent, setFetchedPage, tags.page, tags.rowsPerPage]);
  return {tags, handleOnNextPage};
};

