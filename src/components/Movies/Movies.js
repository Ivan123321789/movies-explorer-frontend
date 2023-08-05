import React from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import Footer from '../Footer/Footer';

function Movies({onBurgerClick, movies, isSaved, onSave, onDelete}) {
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main >
        <SearchForm />
        {/* <Preloader /> */}
        <section className='movies'>
          <MoviesList movies={movies} isSaved={isSaved} onSave={onSave} onDelete={onDelete}/>
          <MoreFilmsButton />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Movies;