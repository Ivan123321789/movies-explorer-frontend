import { useLocation } from 'react-router-dom';
import './Card.css';

function Card({movie, onSave, onDelete, checkSaved}) {
  const location = useLocation();
  const isSaved = checkSaved ? checkSaved(movie) : true;
  const saveButtonClassName = (`card__select ${isSaved ? "card__select_active" : ''}`);

  const handleChangeStatus = () => {
    return isSaved ? onDelete(movie) : onSave(movie);
  }

  function handleClickSave() {
    handleChangeStatus();
  }

  function handleClickDelete() {
    onDelete(movie);
  }

  function movieDuration() {
    const hour = Math.floor(movie.duration/60);
    const min = movie.duration % 60;
    const time = `${hour} ч ${min} м`;
    return time;
  }

  const newDuration = movieDuration();
  
  return (
    <li className="card" >
      <div className='card__container'>
        <div className="card__description">
          <h3 className="card__title">{movie.nameRU || movie.nameEN}</h3> 
          <p className='card__duration'>{newDuration}</p>
        </div>
        {location.pathname === '/movies' && (
          <button type="button" className={saveButtonClassName} onClick={handleClickSave}/>
        )}
        {location.pathname === '/saved-movies' && (
          <button type="button" className="card__delete" onClick={handleClickDelete} /> 
        )}
        
      </div>
      <a href={movie.trailerLink} target='_blank' rel='noreferrer'>
        {location.pathname === '/movies' && (
          <img 
          src={`https://api.nomoreparties.co/${movie.image.url}`} 
          alt={`постер к фильму ${movie.nameRU || movie.nameEN}`} 
          className="card__image" 
        />
        )}
        {location.pathname === '/saved-movies' && (
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
