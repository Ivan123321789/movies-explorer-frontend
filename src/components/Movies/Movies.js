import {useEffect, useState} from 'react';
import './Movies.css';
import HeaderMovie from '../Header/HeaderMovie';
import SearchForm from '../SearchForm/SearchForm';
import { useResize } from '../../hooks/useResize';
import Preloader from '../Preloader/Preloader';
import MoviesList from '../MoviesList/MoviesList';
import MoreFilmsButton from '../MoreFilmsButton/MoreFilmsButton';
import Footer from '../Footer/Footer';

function Movies({onBurgerClick, movies, isSaved, onSave, onDelete}) {
  const {width, isScreenMd, isScreenXl} = useResize();
  const [cardsShow, setCardsShow] = useState('');
  const [more, setMore] = useState('');

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

  useEffect(() => {
    cardToShow();
  }, [width])

  const moreCards = movies.length > cardsShow
  
  return (
    <>
      <HeaderMovie onBurgerClick={onBurgerClick}/>
      <main >
        <SearchForm />
        {/* <Preloader /> */}
        <section className='movies'>
          <MoviesList 
            movies={movies} 
            isSaved={isSaved} 
            onSave={onSave} 
            onDelete={onDelete}
            cardsShow={cardsShow}
          />
          { moreCards ? (
            <MoreFilmsButton onClickMore={handleClickMore}/>
          ) : null}
          
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Movies;