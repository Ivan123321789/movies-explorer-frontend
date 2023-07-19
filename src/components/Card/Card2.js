import React from 'react';
import './Card.css';
import film2 from '../../images/film2.png';

function Card2() {
  return (
    <div className="card">
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">Название фильма длинное чтобы проверить верстку</h3> 
          <p className='card__duration'>1ч 42мин</p>
        </div>
        <button type="button" className="card__select_active" /> 
      </div>
      <img 
        src={film2} 
        alt='постер фильма' 
        className="card__image" 
      />
    </div>
  );
}

export default Card2
