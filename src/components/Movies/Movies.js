import React from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import Footer from '../Footer/Footer';

function Movies({onBurgerClick}) {
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesList />
        <MoreFilmsButton />
      </main>
      <Footer />
    </>
  );
}
export default Movies;