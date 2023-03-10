import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Login.css';

const LoginComp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading, isLoggedIn, error } = useContext(UserContext);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
    }
  }, []);

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
          <h3 className="form-title">Login</h3>
          <br />
          <div className="form-group">
            <label className="form-label">Username</label>
            <br />
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <br />
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-text">{error} </p>}
          <br />
          <button
            type="submit"
            className="btn cursor-pointer"
            disabled={isLoading}
          >
            Login
          </button>
          <p>Demo : user/password</p>
          {isLoading && <Spinner />}
        </form>
      </div>
    </div>
  );
};

const Login = React.memo(LoginComp);
export default Login;
