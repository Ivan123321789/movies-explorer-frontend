import React from 'react';
import './MoviesList.css';
import Card1 from '../Card/Card1';
import Card2 from '../Card/Card2';

function MoviesList() {
  return (
    <>
      <div className='movies__items'>
        <Card1 />
        <Card2 />
        <Card1 />
        <Card2 />
        <Card1 />
        <Card2 />
        <Card1 />
        <Card2 />
        <Card1 />
        <Card2 />
        <Card1 />
        <Card2 />
      </div>
    </>
);
}

export default MoviesList;