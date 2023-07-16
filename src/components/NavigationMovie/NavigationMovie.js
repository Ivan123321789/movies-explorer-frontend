import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../../images/logo.svg';
import './NavigationMovie.css';

function NavigationMovie() {
  return (
    <>
      <button className='header__nav-burger'></button>
      <div className='header__nav-container'>
        <div className='header__nav-movie'>
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
      </div>
    </>
  );
}

export default NavigationMovie;