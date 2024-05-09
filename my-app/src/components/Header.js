
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/resume">resume</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
