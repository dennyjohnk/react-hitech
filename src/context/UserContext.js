import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (name, password) => {
    setIsLoading(true);
    return await new Promise(function (resolve, reject) {
      setTimeout(resolve, 4000);
    }).then(function () {
      localStorage.setItem('name', name);
      localStorage.setItem('isLoggedIn', Boolean(true));
      setName(name);
      setIsLoading(false);
      setIsLoggedIn(true);
    });
  };

  const logout = async (name, password) => {
    setIsLoading(true);
    return await new Promise(function (resolve, reject) {
      setTimeout(resolve, 4000);
    }).then(function () {
      localStorage.setItem('name', null);
      localStorage.setItem('isLoggedIn', Boolean(false));
      setName(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    });
  };

  const getUser = () => {
    const name = localStorage.getItem('name');
    setName(name);
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'false') {
      setIsLoggedIn(Boolean(false));
    } else setIsLoggedIn(Boolean(true));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ name, isLoggedIn, isLoading, login, logout, getUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };