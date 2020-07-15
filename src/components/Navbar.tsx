import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_NAME, ROUTE_URL } from '../pages/Repositories';


export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Note app  
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          to="/"
          exact
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          to="/about"
        >
          Информация
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className="nav-link" 
          to={ROUTE_URL}
        >
          {ROUTE_NAME}
        </NavLink>
      </li>
    </ul>
  </nav>
)