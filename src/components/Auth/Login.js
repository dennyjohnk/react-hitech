import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Login.css';

const LoginComp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading, isLoggedIn } = useContext(UserContext);

  const handleLogin = () => {
    login(username, password).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="flex login-form">
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <div>
            <label>Username</label>
            <br />
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <br />
          <div>
            <label>Password</label>
            <br />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <br />
          <button type="submit" className="cursor-pointer" disabled={isLoading}>
            Login
          </button>
          {isLoading && <Spinner />}
        </form>
      </div>
    </div>
  );
};

const Login = React.memo(LoginComp);
export default Login;
