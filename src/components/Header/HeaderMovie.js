import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './HeaderMovie.css';
import headerLogo from '../../images/logo.svg';

function HeaderMovie({onBurgerClick}) {
  return (
    <header className='header-movie'> 
      <div className='header-movie__container'>
        <Link to='/' className='header-movie__logo-link'>
          <img
            src={headerLogo}
            alt='смайлик-улыбака на зеленом фоне'
            className='header-movie__logo'
          />
        </Link>                
        <NavLink to='/movies' className={({isActive}) => `header-movie__link ${isActive ? 'header-movie__link_active' : ''}`}>Фильмы</NavLink>
        <NavLink to='/saved-movies' className={({isActive}) => `header-movie__link ${isActive ? 'header-movie__link_active' : ''}`}>Сохраненные фильмы</NavLink> 
      </div>
      <Link to='/profile' className='header-movie__nav-akkaunt'>Аккаунт</Link>
      <button className='header-movie__burger' onClick={onBurgerClick} ></button>
    </header>
  );
}

export default HeaderMovie;