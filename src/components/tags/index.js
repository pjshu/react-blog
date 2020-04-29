import React from 'react';
import Tags from './Tags';
import {useQueryTags} from "../../hooks";

function TagsWrapper() {
  const {tags, handleOnNextPage} = useQueryTags();

  return (
    <Tags {...{handleOnNextPage, tags}}/>
  );
}

export default React.memo(TagsWrapper);
