import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import NavigationMain from '../NavigationMain/NavigationMain';

function Header() {
  return (
    <header className='header'> 
        <Link exact to="/">
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='header__logo'
          />
        </Link>  
        <NavigationMain />
    </header>
  );
}

export default Header;