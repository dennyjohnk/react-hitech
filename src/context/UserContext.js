import React, { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (name, password) => {
    setIsLoading(true);
    setError(null);

    if (name !== 'user' || password !== 'password') {
      return await new Promise(function (resolve, reject) {
        setTimeout(reject, 1000);
      }).catch(() => {
        setError('Wrong Username or Password');
        setIsLoading(false);
      });
    }

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
    if (localStorage.hasOwnProperty('name')) {
      const name = localStorage.getItem('name');
      setName(name);
    } else {
      localStorage.setItem('name', null);
    }

    if (localStorage.hasOwnProperty('isLoggedIn')) {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'false') {
        setIsLoggedIn(Boolean(false));
      } else setIsLoggedIn(Boolean(true));
    } else {
      localStorage.setItem('isLoggedIn', false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ name, isLoggedIn, isLoading, login, logout, getUser, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
