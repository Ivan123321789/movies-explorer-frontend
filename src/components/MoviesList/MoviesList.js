import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesList.css';
import Card from '../Card/Card';

function MoviesList({searchMovies, savedMovies, onSave, onDelete, cardsShow, checkSaved}) {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/movies' ? (
        <ul className='movies__items'>
          { searchMovies.slice(0, cardsShow).map((movie) => (
            <Card
              // key={movie.id || movie.movieId}
              key={movie.id}
              movie={movie}
              onSave={onSave}
              checkSaved={checkSaved}
              onDelete={onDelete}
            />
          ))}
        </ul>
      ) : (
        <ul className='movies__items'>
        { savedMovies.map((movie) => (
          <Card
            key={movie.id || movie.movieId}
            movie={movie}
            onDelete={onDelete}
          />
        ))}
      </ul>
      )}
    </>
);
}

export default MoviesList;