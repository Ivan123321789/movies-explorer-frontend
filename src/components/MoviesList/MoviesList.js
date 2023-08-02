import React from 'react';
import './MoviesList.css';
import Card from '../Card/Card';

function MoviesList({movies}) {
  return (
    <>
      <ul className='movies__items'>
        { movies.map((movie) => (
          <Card
            key={movie.id || movie.movieId}
            movie={movie}
          />
        ))}
      </ul>
    </>
);
}

export default MoviesList;