import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupHeaderMenu from '../PopupHeaderMenu/PopupHeaderMenu';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopupInfo from '../PopupInfo/PopupInfo';
import * as errors from '../../utils/errorMessages';
import * as success from '../../utils/successMessages';
import { api } from '../../utils/mainApi';
import * as movieApi from '../../utils/movieApi';
import Preloader from '../Preloader/Preloader';

function App() {
  const [message, setMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [profileErrorMessage, setProfileErrorMessage] = useState('');
  const [searchErrorMessage, setSearchErrorMessage] = useState('');
  const [profileSuccessMessage, setProfileSuccessMessage] = useState('');
  const [isPopupHeaderMenuOpen, setIsPopupHeaderMenuOpen] = useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ name: '', email: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCheckingToken, setIsCheckingToken] = useState(true);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchSavedMovies, setSearchSavedMovies] = useState([]);


  const navigate = useNavigate();

  const handlePopupHeaderMenuClick = () => {
    setIsPopupHeaderMenuOpen(true);
  }

  function closePopup() {
    setIsPopupHeaderMenuOpen(false);
    setIsPopupInfoOpen(false);
  }
  function resetMessage() {
    setMessage('');
    setProfileErrorMessage('');
  }

  function handleLogin({ email, password }) {
    api.authorize({ email, password })
      .then((res) => {
        api.setToken(res.token);
        localStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        setIsPopupInfoOpen(true);
        setRegisterErrorMessage(success.successLogin);
        navigate('/movies');
      })
      .catch((err) => {
        setIsPopupInfoOpen(true);
        if (err === 400) {
          setRegisterErrorMessage(errors.unauthError)
        } else {
          setRegisterErrorMessage(errors.neededAutorisation)
        }
        setIsLoggedIn(false);
      })
  }

  function handleRegister({ name, email, password }) {
    api.register({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setRegisterErrorMessage(success.youAreWithUs);
      })
      .catch((err) => {
        setIsPopupInfoOpen(true);
        if (err === 409) {
          setRegisterErrorMessage(errors.registerUserAlready);
        } else {
          setRegisterErrorMessage(errors.registerError);
        }
      })
  }

  function handleCheckToken() {
    const token = localStorage.getItem('token');
    if (!token) setIsCheckingToken(false);
    api.getUser(token)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true)
        }
      })
      .catch((err) => {
        setIsPopupInfoOpen(true);
        setRegisterErrorMessage(errors.notTransmittedToken);
      })
      .finally(() => setIsCheckingToken(false));

  };

  function handleSignOut() {
    localStorage.clear();
    setIsLoggedIn(false);
    setSearchSavedMovies([]);
    setSearchMovies([]);
    setSavedMovies([]);
    setMovies([]);
    setCurrentUser({ name: '', email: '' });
    setProfileSuccessMessage('');
    setProfileSuccessMessage('');
    setRegisterErrorMessage('');
  }

  function handleUpdateProfile(data) {
    api.changeProfile(data)
      .then((newData) => {
        console.log(1);
        setCurrentUser(newData.user);
        setProfileSuccessMessage(success.profileIsUpdate);
      })
      .catch((err) => {
        if (err === 400) {
          setProfileErrorMessage(errors.profileUpdateError)
        } else if (err === 409) {
          setProfileErrorMessage(errors.registerUserAlready);
        } else {
          setProfileErrorMessage(errors.iHateThisDiploma);
        }

      })
      .finally(() => {
        setTimeout(() => setProfileSuccessMessage(''), 3000);
        setTimeout(() => setProfileErrorMessage(''), 3000);
      })
  }

  const checkSaved = (movie) => savedMovies.some((i) => i.movieId === movie.id);

  function filterMovies(search, isShort, movies) {
    return movies.filter((movie) => {
      const searchRuSymbols = movie.nameRU.toLowerCase().includes(search.toLowerCase());
      const searchEnSymbols = movie.nameEN.toLowerCase().includes(search.toLowerCase());
      const shortMovie = isShort ? movie.duration <= 40 : true;
      return (searchRuSymbols || searchEnSymbols) && shortMovie;
    })
  }

  function handleSaveMovie(movie) {
    return api.postMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie.movie, ...savedMovies]);
        checkSaved(newMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDeleteMovie(movie) {
    const deletedMovieId = movie._id ? movie._id : savedMovies.find(item => item.movieId === movie.id && item.owner === currentUser._id)._id;
    setIsLoading(true);
    return api.deleteMovie(deletedMovieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((c) => c._id !== deletedMovieId))
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }

  function handleSearchMovies(search, isShort) {
    localStorage.setItem('search-symbols', search);
    localStorage.setItem('search-shortMovie', JSON.stringify(isShort));
    if (!search) {
      setSearchMovies([]);
      setSearchErrorMessage('Введите ключевое слово');
      return;
    }
    setIsLoading(true);
    const filtered = filterMovies.bind(null, search, isShort);
    if (movies.length === 0) {
      movieApi.getMovies()
        .then((res) => {
          localStorage.setItem('allMovies', JSON.stringify(res));
          setMovies(res);
          const filteredMovies = filtered(res);
          setSearchErrorMessage(filteredMovies.length === 0 ? 'Фильмов не найдено' : '');
          setSearchMovies(filteredMovies);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setIsLoading(false);
      const filteredMovies = filtered(movies);
      setSearchErrorMessage(filteredMovies.length === 0 ? 'Фильмов не найдено' : '');
      setSearchMovies(filteredMovies);
    }
  }

  function handleSearchSavedMovies(search, isShort) {
    const filtered = filterMovies.bind(null, search, isShort);
    setSearchSavedMovies(filtered(savedMovies));
  }


  useEffect(() => {
    handleCheckToken();
  }, [])

  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUser(), api.getUserMovies()])
        .then(([userInfo, savedMovies]) => {
          setCurrentUser(userInfo.user);
          setSavedMovies(savedMovies.data);
          setMovies(JSON.parse(localStorage.getItem('allMovies') || '[]'));
        })
        .catch((err) => {
          console.log('Ошибка. Запрос не выполнен');
        });
    }
  }, [isLoggedIn]);

  if (isCheckingToken) return (<Preloader />)

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/"
            element={<Main
              onBurgerClick={handlePopupHeaderMenuClick}
              isLoggedIn={isLoggedIn}
            />} />
          <Route path="/signup"
            element={<Register
              isLoggedIn={isLoggedIn}
              message={message}
              resetMessage={resetMessage}
              onRegister={handleRegister} />} />
          <Route path="/signin"
            element={<Login
              isLoggedIn={isLoggedIn}
              message={message}
              resetMessage={resetMessage}
              onLogin={handleLogin} />} />
          <Route path="/profile"
            element={<ProtectedRoute
              element={Profile}
              isLoggedIn={isLoggedIn}
              messageBad={profileErrorMessage}
              messageGood={profileSuccessMessage}
              resetMessage={resetMessage}
              onUpdateProfile={handleUpdateProfile}
              onSignOut={handleSignOut}
              onBurgerClick={handlePopupHeaderMenuClick} />
            } />
          <Route path="/movies"
            element={<ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              onSearch={handleSearchMovies}
              onSave={handleSaveMovie}
              checkSaved={checkSaved}
              onDelete={handleDeleteMovie}
              allMovies={movies}
              movies={searchMovies}
              searchErrorMessage={searchErrorMessage}
              onBurgerClick={handlePopupHeaderMenuClick} />
            } />
          <Route path="/saved-movies"
            element={<ProtectedRoute
              element={SavedMovies}
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              // movies={searchSavedMovies}
              // savedMovies={savedMovies}
              savedMovies={searchSavedMovies}
              onSearch={handleSearchSavedMovies}
              onDelete={handleDeleteMovie}
              onBurgerClick={handlePopupHeaderMenuClick} />
            } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <PopupHeaderMenu
          isOpen={isPopupHeaderMenuOpen}
          onClose={closePopup}
        />
        <PopupInfo
          isOpen={isPopupInfoOpen}
          onClose={closePopup}
          message={registerErrorMessage}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;