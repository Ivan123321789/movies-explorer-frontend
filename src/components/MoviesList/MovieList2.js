import React from 'react';
import './MoviesList.css';
import Card from '../Card/Card';
import film1 from '../../images/film1.png';

function MoviesList() {
  return (
    <>
      <div className='movies__items'>
      <Card
        title='Короткое название'
        duration='1ч 42мин'
        picture={film1}/>
        <Card
        title='Короткое название'
        duration='1ч 42мин'
        picture={film1}/>
        <Card
        title='Короткое название'
        duration='1ч 42мин'
        picture={film1}/>
      </div>
    </>
);
}

export default MoviesList;