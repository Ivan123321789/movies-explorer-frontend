import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './HeaderMovie.css';
import '../NavigationMovie/NavigationMovie.css';
import headerLogo from '../../images/logo.svg';
// import NavigationMovie from '../NavigationMovie/NavigationMovie';

function HeaderMovie() {
  return (
    <header className='header-movie'> 
      <div className='header-movie__container'>
        <Link exact to="/" className="header-movie__link">
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='header-movie__logo'
          />
        </Link>
        <NavLink to='/' className='header__nav-link'>Главная</NavLink>
        <NavLink to='/movies' className='header__nav-link_active'>Фильмы</NavLink>
        <NavLink to='/saved-movies' className='header__nav-link'>Сохраненные фильмы</NavLink>
      </div>
      <Link to="/profile" className="header__nav-akkaunt">Аккаунт</Link>
    </header>
  );
}

export default HeaderMovie;