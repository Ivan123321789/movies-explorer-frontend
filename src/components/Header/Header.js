import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import NavigationMain from '../NavigationMain/NavigationMain';

function Header() {
  return (
    <header className='header'> 
      <div className='header__container'>
        <Link exact to="/" className="menu__link">
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='header__logo'
          />
        </Link>  
        <NavigationMain />
      </div>
    </header>
  );
}

export default Header;