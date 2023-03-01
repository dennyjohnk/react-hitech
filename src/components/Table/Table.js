import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Toolbar from './Toolbar.js';
import Spinner from '../Spinner/Spinner.js';
import { PostContext } from '../../context/PostContext.js';
import { UserContext } from '../../context/UserContext.js';

import './style.css';

const TableComp = () => {
  const navigate = useNavigate();
  const { postList, isLoading, GetPostLists } = useContext(PostContext);
  const { isLoggedIn } = useContext(UserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    GetPostLists();
  }, []);

  return (
    <>
      <Toolbar />
      {!isLoading &&
        postList?.map((post) => (
          <div className="flex post-container" key={post.id}>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-body">{post.body}</div>
          </div>
        ))}
      {isLoading && <Spinner />}
      {!postList?.length && <p>No Results</p>}
    </>
  );
};

const Table = React.memo(TableComp);
export default Table;
