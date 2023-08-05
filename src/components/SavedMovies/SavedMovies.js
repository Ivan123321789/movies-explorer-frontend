import React from 'react';
import './SavedMovies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import FooterSaved from '../Footer/FooterSaved';
import MoviesList from '../MoviesList/MoviesList';

function SavedMovies({savedMovies, onBurgerClick, onDelete}) {
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <SearchForm />
        {/* <Preloader /> */}
        <section className='movies'>
          <MoviesList savedMovies={savedMovies} onDelete={onDelete}/>
        </section>
      </main>
      <FooterSaved />
    </>
  );
}
export default SavedMovies;