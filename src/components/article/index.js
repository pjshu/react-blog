import React, {useEffect} from 'react';
import Article from "./Article";
import Prism from "../../helpers/prism";
import '../../style/prism.css';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-bash.min';
import 'prismjs/components/prism-c.min';
import {useQueryPost} from '../../hooks';


function ArticleWrapper() {
  const {post} = useQueryPost();

  useEffect(() => {
    Prism.highlightAll();
  }, [post]);

  return (
    <Article {...post}/>
  );
}

export default React.memo(ArticleWrapper);
