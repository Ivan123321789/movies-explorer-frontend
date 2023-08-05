import React from 'react';
import { useLocation } from 'react-router-dom';
import './MoviesList.css';
import Card from '../Card/Card';

function MoviesList({movies, savedMovies, isSaved, onSave, onDelete, cardsShow}) {
  const location = useLocation();
  
  return (
    <>
      {location.pathname === '/movies' ? (
        <ul className='movies__items'>
          { movies.slice(0, cardsShow).map((movie, index) => (
            <Card
              // key={movie.id || movie.movieId}
              key={index}
              movie={movie}
              isSaved={isSaved}
              onSave={onSave}
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