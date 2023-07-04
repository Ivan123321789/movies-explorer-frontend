import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';
import headerLogo from '../../images/logo.svg';
import NavigationMain from '../NavigationMain/NavigationMain';

function Header() {
  return (
    <header className="header"> 
      <div className='header__container'>
        <NavLink exact to="/" className="menu__link">
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='header__logo'
          />
        </NavLink>  
        <NavigationMain />
      </div>
    </header>
  );
}

export default Header;