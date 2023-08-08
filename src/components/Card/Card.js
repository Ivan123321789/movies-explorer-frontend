import React from 'react';
import './Card.css';

function Card({title, duration, picture}) {
  return (
    <li className="card">
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">{title}</h3> 
          <p className='card__duration'>{duration}</p>
        </div>
        <button type="button" className="card__select" /> 
      </div>
      <img 
        src={picture} 
        alt={`постер к фильму ${title}`} 
        className="card__image" 
      />
    </li>
  );
}

export default Card
