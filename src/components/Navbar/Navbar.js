import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const NavbarComp = () => {
  return (
    <header className="header__navbar">
      <div className="navbar">
        <h2 className="navbar__logo">
          <Link to="/">Skateboard</Link>
        </h2>
        <div className="navbar__links">
          <Link to="/">Home</Link>
          <Link to="/">Login</Link>
        </div>
      </div>
    </header>
  );
};

const Navbar = React.memo(NavbarComp);
export default Navbar;
