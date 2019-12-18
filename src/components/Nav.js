import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

const Nav = (props) => {
  <BrowserRouter>
  <div className="main-nav">
    <Route path="/cats"  />
    <Route path="/dogs"/>
    <Route path="/computers"/>
  </div>
</BrowserRouter>
}

export default Nav;


<nav class="main-nav">
  <ul>
    <li><a href='#'>Cats</a></li>
    <li><a href='#'>Dogs</a></li>
    <li><a href='#'>Computers</a></li>
  </ul>
</nav>
