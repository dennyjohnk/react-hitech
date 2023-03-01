import React, { createContext, useState } from 'react';

const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [postList, setPostList] = useState();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const GetPostLists = async (page = 1, search = '') => {
    setIsLoading(true);
    const limit = 10;
    const url = `https://jsonplaceholder.typicode.com/posts?q=${search}&_page=${page}&_limit=${limit}`;
    const resp = await fetch(url).then((resp) => resp.json());
    setPostList(resp);
    setIsLoading(false);
    return resp;
  };

  return (
    <PostContext.Provider
      value={{ postList, page, setPage, isLoading, GetPostLists }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
