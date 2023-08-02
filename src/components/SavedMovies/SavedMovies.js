import React from 'react';
import './SavedMovies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import FooterSaved from '../Footer/FooterSaved';

function SavedMovies({onBurgerClick}) {
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main>
        <SearchForm />
        {/* <Preloader /> */}
        <section className='movies'>
          <p>Тут будут сохраненные фильмы</p>
        </section>
      </main>
      <FooterSaved />
    </>
  );
}
export default SavedMovies;