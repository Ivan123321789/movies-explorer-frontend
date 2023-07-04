import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavigationMain.css';

function NavigationMain() {
  return (
    <div className='header__nav'>
      <NavLink to="/signup" className='header__reg'>Регистрация</NavLink>
      <NavLink to="/signin" >
        <button type='button' className='header__in'>Войти</button>
      </NavLink>
    </div>
  );
}

export default NavigationMain;