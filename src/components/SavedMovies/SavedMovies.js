import React, { useEffect } from 'react';
import './SavedMovies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import FooterSaved from '../Footer/FooterSaved';
import MoviesList from '../MoviesList/MoviesList';

function SavedMovies({savedMovies, movies, onSearch, onBurgerClick, onDelete}) {
  useEffect(() => onSearch('', false), []);
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <SearchForm onSearch={onSearch} />
        <section className='movies'>
          <MoviesList savedMovies={savedMovies} onDelete={onDelete}/>
        </section>
      </main>
      <FooterSaved />
    </>
  );
}
export default SavedMovies;