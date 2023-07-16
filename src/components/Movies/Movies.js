import React from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <HeaderMovie />
      <SearchForm />
      <p className='movies'>Тут будут карточки фильмов</p>
    </>
  );
}
export default Movies;