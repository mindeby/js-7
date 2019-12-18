import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';


const Nav = () => (
  <nav className="main-nav">
    <ul>
      <li><NavLink to="">Sky</NavLink></li>
      <li><NavLink to="">Sea</NavLink></li>
      <li><NavLink to="">landscapes</NavLink></li>
    </ul>
  </nav>
)

export default Nav;
