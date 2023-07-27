import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationMain.css';

function NavigationMain() {
  return (
    <div className='header__nav-main'>
      <Link to="/signup" className='header__nav-reg'>Регистрация</Link>
      <Link to="/signin" className='header__nav-in'>Войти</Link>
    </div>
  );
}

export default NavigationMain;