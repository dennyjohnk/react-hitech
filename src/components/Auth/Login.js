import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Login.css';

const LoginComp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const { login, isLoading, isLoggedIn } = useContext(UserContext);
  console.log(isLoggedIn);

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
          <div>
            <h3 className="form-title">Login</h3>
            <br />
            <label className="form-label">Username</label>
            <br />
            <input
              className="form-input"
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <br />
          <div>
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

          <br />
          <button
            type="submit"
            className="btn cursor-pointer"
            disabled={isLoading}
          >
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
