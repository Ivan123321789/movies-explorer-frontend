import React from 'react';
import './Card.css';

function Card({movie}) {
  return (
    <li className="card">
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">{movie.nameRU || movie.nameEN}</h3> 
          <p className='card__duration'>{movie.duration}</p>
        </div>
        <button type="button" className="card__select" /> 
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        <img 
          src={`https://api.nomoreparties.co/${movie.image.url}`} 
          alt={`постер к фильму ${movie.nameRU || movie.nameEN}`} 
          className="card__image" 
        />
      </a>
    </li>
  );
}

export default Card
