import React, { useEffect, useContext } from 'react';

import Toolbar from './Toolbar.js';
import Spinner from '../Spinner/Spinner.js';
import { PostContext } from '../../context/postContext.js';

import './style.css';

const TableComp = () => {
  const { postList, isLoading, GetPostLists } = useContext(PostContext);

  useEffect(() => {
    GetPostLists();
  }, []);

  return (
    <div className="post-main">
      <Toolbar />
      {!isLoading &&
        postList?.map((post) => (
          <div className="flex post-container" key={post.id}>
            <div className="post-title">{post.title}</div>
            <div className="post-body">{post.body}</div>
          </div>
        ))}
      {isLoading && <Spinner />}
      {!postList?.length && <p>No Results</p>}
    </div>
  );
};

const Table = React.memo(TableComp);
export default Table;
