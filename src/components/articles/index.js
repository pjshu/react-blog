import Articles from "./Articles";
import React from 'react';
import {useQueryPosts} from "../../hooks";


const ArticlesWrapper = React.memo(function Index() {
  const {posts, handleOnNextPage} = useQueryPosts();

  return (
    <Articles {...{posts, handleOnNextPage}}/>
  );
});

export default React.memo(ArticlesWrapper);

