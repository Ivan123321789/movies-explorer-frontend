import React from 'react';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupHeaderMenu from '../PopupHeaderMenu/PopupHeaderMenu';
import * as auth from '../../utils/auth';
import apiMovie from '../../utils/apiMovie';

function App() {
  const [message, setMessage] = useState('');
  const [isPopupHeaderMenuOpen, setIsPopupHeaderMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: ''});

  const handlePopupHeaderMenuClick = () => {
    setIsPopupHeaderMenuOpen(true);
  }
  function closePopup() {
    setIsPopupHeaderMenuOpen(false);
  }
  function resetMessage() {
    setMessage('');
  }

  function handleRegister(registerData) {
    auth.register(registerData)
    .then((res) => {
      console.log(res);
      console.log(res.data.email);
      setIsRegSuccess(true);
      navigate('/signin');
    })
    .catch((err) => {
      console.log(err);
      setMessage('Что-то пошло не так! Попробуйте еще раз!');
    })
    .finally(()=> setIsTooltipPopupOpen(true));
  }

  function handleLogin(userData) {
    auth.authorize(userData)
     .then((res) => {
       console.log(res);
       console.log(userData.email);
       api.setToken(res.token);
       localStorage.setItem('jwt', res.token);
       setIsLoggedIn(true);
       setUserEmail(userData.email); 
       navigate('/');  
     })
    .catch((err) => {
      console.log(err);
      setIsLoggedIn(false);
      setInfoTooltipImage(imageFail);
      setMessage('Что-то пошло не так! Попробуйте еще раз!');
      setIsTooltipPopupOpen(true);
    })
  }

  function handleCheckToken() {
    const token = localStorage.getItem('jwt');
    if (token) {
      auth.checkToken(token)
      .then((res) => {
        console.log(res);
        if (res) {
          setUserEmail(res.user.email);
          setIsLoggedIn(true);
          navigate('/');
        }       
      })
      .catch((err) => {console.log(`Ошибка: ${err}`)});
    }
  };

  useEffect(() => {
      handleCheckToken();
  }, [])
  
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUser(), apiMovie.getMovies()])
      .then(([userInfo, movies]) => {
        setCurrentUser(userInfo.user);
        setMovies(movies.data);    
      })
      .catch((err) => {
        console.log('Ошибка. Запрос не выполнен');
      });
    }
  }, [isLoggedIn]);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path="/" element={<Main onBurgerClick={handlePopupHeaderMenuClick} loggedIn={isLoggedIn} />} />
          <Route path="/signup" element={<Register  message={message} resetMessage={resetMessage} onRegister={handleRegister}/>} />
          <Route path="/signin" element={<Login message={message} resetMessage={resetMessage} onLogin={handleLogin}/>} />
          <Route path="/profile" element={<ProtectedRoute element={Profile} loggedIn={isLoggedIn} message={message} resetMessage={resetMessage}
            onBurgerClick={handlePopupHeaderMenuClick}/>} />
          <Route path="/movies" element={<ProtectedRoute element={Movies} loggedIn={isLoggedIn} onBurgerClick={handlePopupHeaderMenuClick}/>} />
          <Route path="/saved-movies" element={<ProtectedRoute element={SavedMovies} loggedIn={isLoggedIn} onBurgerClick={handlePopupHeaderMenuClick}/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <PopupHeaderMenu 
        isOpen={isPopupHeaderMenuOpen} 
        onClose={closePopup}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;