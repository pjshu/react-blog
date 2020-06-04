import React from 'react';
import Tags from './Tags';
import {usePagingTags} from "../../hooks";

function TagsWrapper() {
  const {tags, handleOnNextPage} = usePagingTags();
  console.log(tags.bottom);
  return (
    <Tags {...{handleOnNextPage, tags}}/>
  );
}

export default React.memo(TagsWrapper);
