import React, { useState, useContext } from 'react';

import { PostContext } from '../../context/postContext.js';
import './style.css';

const ToolbarComp = () => {
  const [searchText, setSearchText] = useState('');
  const { page, setPage, isLoading, GetPostLists } = useContext(PostContext);

  const handlePrev = () => {
    if (page === 1) return;
    setPage(page - 1);
    GetPostLists(page);
  };

  const handleNext = () => {
    if (page === 10) return;
    setPage(page + 1);
    GetPostLists(page);
  };

  const handleSearch = (event) => {
    setSearchText(event.target.value);
    GetPostLists(1, searchText);
  };

  return (
    <div className="flex table-toolbar">
      <div className="flex">
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchText}
        />
      </div>
      <div className="flex prev-next-container">
        <button onClick={() => handlePrev()} disabled={isLoading}>
          Prev
        </button>
        <p>{page}/10</p>
        <button onClick={() => handleNext()} disabled={isLoading}>
          Next
        </button>
      </div>
    </div>
  );
};

const Toolbar = React.memo(ToolbarComp);
export default Toolbar;
