import {useEffect, useState} from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import { useResize } from '../../hooks/useResize';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import Footer from '../Footer/Footer';
import { CARD_ADDED_QUANTITY, CARD_INITIAL_QUANTITY } from '../../utils/movieParams';

function Movies({onBurgerClick, isLoading, allMovies, searchMovies, onSearch, onSave, onDelete, checkSaved, searchErrorMessage }) {
  const {width, isScreenMd, isScreenXl} = useResize();
  const [cardsShow, setCardsShow] = useState(0);
  const [cardsInit, setCardsInit] = useState(0);
  const [more, setMore] = useState(0);
  
  const savedSearchSymbols = localStorage.getItem('search-symbols') || '';
  const savedSearchShortMovies = (localStorage.getItem('search-shortMovie') === 'true') ? true : false;

  const cardToShow = () => {
    let showCards = 0;
    let more = 0;
    if(isScreenXl) {
      showCards = CARD_INITIAL_QUANTITY.PC;
      more = CARD_ADDED_QUANTITY.PC;
    } else if(isScreenMd) {
      showCards = CARD_INITIAL_QUANTITY.TABLET;
      more = CARD_ADDED_QUANTITY.OTHER;
    } else {
      showCards = CARD_INITIAL_QUANTITY.MOBILE;
      more = CARD_ADDED_QUANTITY.OTHER;
    }
    setCardsInit(showCards);
    setMore(more);  
  }

  function handleClickMore() {
    let numberOfMore = more;
    if (cardsShow % more !== 0 && isScreenMd) {
      numberOfMore = more - (cardsShow % more);
    }
    const newCardsShow = cardsShow + numberOfMore;
    setCardsShow(newCardsShow);
  }

  const moreCards = searchMovies.length > cardsShow;

  useEffect(cardToShow, [width]);
  
  useEffect(() => {
    if (allMovies.length > 0) {
      onSearch(savedSearchSymbols, savedSearchShortMovies);
    }
  }, [allMovies]);


  useEffect(() => {
    setCardsShow(cardsInit);
  }, [searchMovies])

  
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
            searchMovies={searchMovies}
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