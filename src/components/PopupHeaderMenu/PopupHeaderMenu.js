import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './PopupHeaderMenu.css';

function PopupHeaderMenu({isOpen, onClose}) {

  return (
    <section className={`popup ${isOpen && 'popup_opened'}`} >
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="закрыть меню" title="закрыть меню" onClick={onClose}/>
        <nav className="popup__body ">
          <div className="popup__list">            
            <NavLink to="/" onClick={onClose} className={({isActive}) => `popup__link ${isActive ? "popup__link_active" : ""}`}>Главная</NavLink>                
            <NavLink to="/movies" onClick={onClose} className={({isActive}) => `popup__link ${isActive ? "popup__link_active" : ""}`}>Фильмы</NavLink>
            <NavLink to="/saved-movies" onClick={onClose} className={({isActive}) => `popup__link ${isActive ? "popup__link_active" : ""}`}>Сохраненные фильмы</NavLink>            
          </div>
          <Link to="/profile" onClick={onClose} className="popup__akkaunt">Аккаунт</Link>   
          </nav>
      </div>
    </section>
  );
}

export default PopupHeaderMenu