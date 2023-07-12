import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMain.css';

function NavigationMain() {
  return (
    <div className='header__nav'>
      <Link to="/signup" className='header__reg'>Регистрация</Link>
      <Link to="/signin" >
        <button type='button' className='header__in'>Войти</button>
      </Link>
    </div>
  );
}

export default NavigationMain;