import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import Spinner from '../Spinner/Spinner';

import './Navbar.css';

const NavbarComp = () => {
  const { name, isLoading, isLoggedIn, logout } = useContext(UserContext);

  return (
    <header className="header__navbar">
      <div className="navbar">
        <h2 className="navbar__logo">
          <Link to="/">Skateboard</Link>
        </h2>
        <div className="navbar__links">
          {isLoading && isLoggedIn && <Spinner />}
          {!isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <div className="cursor-pointer" onClick={() => logout()}>
              LOGOUT
            </div>
          )}
          {isLoggedIn && (
            <div className="avatar-container">
              <div className="name">{name.charAt(0).toUpperCase()}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

const Navbar = React.memo(NavbarComp);
export default Navbar;
