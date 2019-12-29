import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/plants">Plants</NavLink></li>
        <li><NavLink to="/sea">Sea</NavLink></li>
        <li><NavLink to="/landscapes">Landscapes</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
