import React from 'react';
import { useLocation } from 'react-router-dom';
import './Card.css';

function Card({movie, isSaved, onSave, onDelete}) {
  const location = useLocation();
  const saveButtonClassName = (`card__select ${isSaved ? "card__select_active" : null}`)

  function handleClickSave() {
    onSave(movie)
  }

  function handleClickDelete() {
    onDelete(movie._id)
  }
  return (
    <li className="card">
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">{movie.nameRU || movie.nameEN}</h3> 
          <p className='card__duration'>{movie.duration}</p>
        </div>
        {location.pathname === '/movies' && (
          <button type="button" className={saveButtonClassName} onClick={handleClickSave}/>
        )}
        {location.pathname === '/saved-movies' && (
          <button type="button" className="card__delete" onClick={handleClickDelete} /> 
        )}
        
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        {location.pathname === 'movies' && (
          <img 
          src={`https://api.nomoreparties.co/${movie.image.url}`} 
          alt={`постер к фильму ${movie.nameRU || movie.nameEN}`} 
          className="card__image" 
        />
        )}
        {location.pathname === 'saved-movies' && (
          <img 
          src={movie.image}
          alt={`постер к фильму ${movie.nameRU || movie.nameEN}`} 
          className="card__image" 
        />
        )}
      </a>
    </li>
  );
}

export default Card
