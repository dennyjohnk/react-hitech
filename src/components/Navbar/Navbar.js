import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Navbar.css';

const NavbarComp = () => {
  const navigate = useNavigate();
  const { name, isLoading, isLoggedIn, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout().then(() => {
      navigate('/login');
    });
  };

  return (
    <header className="header__navbar">
      <div className="navbar">
        <h2 className="navbar__logo">
          <Link to="/">Skateboard</Link>
        </h2>
        <div className="navbar__links">
          {!isLoggedIn ? (
            <Link to="/login">
              <button className="btn">Login</button>
            </Link>
          ) : (
            <button className="btn" onClick={() => handleLogout()}>
              LOGOUT
            </button>
          )}
          {isLoading && isLoggedIn && <Spinner />}
          {isLoggedIn && !isLoading && (
            <div className="avatar-container">
              <div className="name">{name?.charAt(0).toUpperCase()}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const Navbar = React.memo(NavbarComp);
export default Navbar;
