import {useEffect, useState} from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import { useResize } from '../../hooks/useResize';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import Footer from '../Footer/Footer';

function Movies({onBurgerClick, isLoading, allMovies, movies, onSearch, onSave, onDelete, checkSaved, searchErrorMessage }) {
  const {width, isScreenMd, isScreenXl} = useResize();
  const [cardsShow, setCardsShow] = useState('');
  const [more, setMore] = useState('');
  const savedSearchSymbols = localStorage.getItem('search-symbols') || '';
  const savedSearchShortMovies = (localStorage.getItem('search-shortMovie') === 'true') ? true : false;

  const cardToShow = () => {
    let showCards = 0;
    let more = 0;
    if(isScreenXl) {
      showCards = 12;
      more = 3;
    } else if(isScreenMd) {
      showCards = 8;
      more = 2;
    } else {
      showCards = 5;
      more = 2;
    }
    setCardsShow(showCards);
    setMore(more);  
  }

  function handleClickMore() {
    const newCardsShow = cardsShow + more;
    setCardsShow(newCardsShow);
  }

  const moreCards = movies.length > cardsShow;

  useEffect(() => {
    cardToShow();
  }, [width]);
  
  useEffect(() => {
    if (allMovies.length > 0) {
      onSearch(savedSearchSymbols, savedSearchShortMovies);
    }
  }, [allMovies]);

  
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main >
        <SearchForm 
          onSearch={onSearch} 
          savedSearchSymbols={savedSearchSymbols} 
          savedSearchShortMovies={savedSearchShortMovies}/>
        <section className='movies'>
        {isLoading ?
          <Preloader />
          
          :
          <>
          <MoviesList 
            movies={movies}
            onSave={onSave} 
            onDelete={onDelete}
            cardsShow={cardsShow}
            checkSaved={checkSaved}
          />
          {
            searchErrorMessage && <p className="movies__message">{searchErrorMessage}</p>
          }
          { moreCards ? (
            <MoreFilmsButton onClickMore={handleClickMore}/>
          ) : null}
          </>
        }
          
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Movies;