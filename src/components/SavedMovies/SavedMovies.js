import React from 'react';
import './SavedMovies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesList2 from '../MoviesList/MovieList2';
import FooterSaved from '../Footer/FooterSaved';

function SavedMovies({onBurgerClick}) {
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesList2 />
      <FooterSaved />
    </>
  );
}
export default SavedMovies;