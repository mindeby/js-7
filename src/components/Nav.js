import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/fish">Fish</NavLink></li>
        <li><NavLink to="/plants">Plants</NavLink></li>
        <li><NavLink to="/birds">Birds</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
