import React from 'react';
import './Card.css';
import film1 from '../../images/film1.png';

function Card1() {
  return (
    <div className="card">
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">Название фильма</h3> 
          <p className='card__duration'>1ч 42мин</p>
        </div>
        <button type="button" className="card__select" /> 
      </div>
      <img 
        src={film1} 
        alt='постер фильма' 
        className="card__image" 
      />
    </div>
  );
}

export default Card1
