import React, { useContext, useState } from 'react';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Login.css';

const LoginComp = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading } = useContext(UserContext);

  const handleLogin = () => {
    login(username, password);
  };

  return (
    <div className="flex login-form">
      <div className="form">
        {isLoading && <Spinner />}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

const Login = React.memo(LoginComp);
export default Login;
