import React from 'react';
import './MoviesList.css';
import Card3 from '../Card/Card3';

function MoviesList() {
  return (
    <>
      <div className='movies__items'>
        <Card3 />
        <Card3 />
        <Card3 />
        <Card3 />
      </div>
    </>
);
}

export default MoviesList;