import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/books">Books</Link>
        </li>
      </ul>
    </nav>
  );
};

const Navbar = React.memo(NavbarComp);
export default Navbar;
