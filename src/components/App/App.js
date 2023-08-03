import React from 'react';
import {useState, useEffect} from 'react';
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
import * as errors from '../../utils/errorMessages';
import * as success from '../../utils/successMessages';
import {api} from '../../utils/Api';
import * as auth from '../../utils/auth';
import * as apiMovie from '../../utils/apiMovie';
import PopupInfo from '../PopupInfo/PopupInfo';

function App() {
  const [message, setMessage] = useState('');
  const [registerErrorMessage, setRegisterErrorMessage] = useState('');
  const [profileErrorMessage, setProfileErrorMessage] = useState('');
  const [profileSuccessMessage, setProfileSuccessMessage] = useState('');
  const [isPopupHeaderMenuOpen, setIsPopupHeaderMenuOpen] = useState(false);
  const [isPopupInfoOpen, setIsPopupInfoOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: ''});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

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

  function handleLogin({email, password}) {
    auth.authorize({email, password})
     .then((res) => {
       console.log(res);
       api.setToken(res.token);
       localStorage.setItem('token', res.token);
       setIsLoggedIn(true);
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

  function handleRegister({name, email, password}) {
    auth.register({name, email, password})
    .then(() => {
      handleLogin({email, password});
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
    if (token) {
      auth.checkToken(token)
      .then((res) => {
        console.log(res);
        if (res) {
          setIsLoggedIn(true)
        }       
      })
      .catch((err) => {
        setIsPopupInfoOpen(true);
        setRegisterErrorMessage(errors.notTransmittedToken);
      });
    }
  };

  function handleSignOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  function handleUpdateProfile(data) {
    api.changeProfile(data)
    .then((newData) => {
      console.log(newData);
      setCurrentUser({name: newData.user.name, email: newData.user.email});
      setProfileSuccessMessage(success.profileIsUpdate);
    })
    .catch((err) => {
      console.log(err);
      if (err === 400) {
        setProfileErrorMessage(errors.profileUpdateError)
      } else {
        setProfileErrorMessage(errors.iHateThisDiploma);
      }
      
    })
    .finally(() => {
      setTimeout(() => setProfileSuccessMessage(''), 3000);
      setTimeout(() => setProfileErrorMessage(''), 3000);
    })
  }

  useEffect(() => {
      handleCheckToken();
  }, [])
  
  useEffect(() => {
    if (isLoggedIn) {
      Promise.all([api.getUser(), apiMovie.getMovies()])
      .then(([userInfo, movies]) => {
        console.log(movies);
        setCurrentUser(userInfo.user);
        setMovies(movies);    
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
          <Route path="/" 
            element={<Main 
              onBurgerClick={handlePopupHeaderMenuClick} 
              isLoggedIn={isLoggedIn} 
              />} />
          <Route path="/signup" 
            element={<Register  
              message={message} 
              resetMessage={resetMessage} 
              onRegister={handleRegister}/>} />
          <Route path="/signin" 
            element={<Login 
              message={message} 
              resetMessage={resetMessage} 
              onLogin={handleLogin}/>} />
          <Route path="/profile" 
            element={<ProtectedRoute 
              element={Profile} 
              isLoggedIn={isLoggedIn}
              messageBad={profileErrorMessage}
              messageGood={profileSuccessMessage} 
              resetMessage={resetMessage}
              onUpdateProfile={handleUpdateProfile}
              onSignOut={handleSignOut}
              onBurgerClick={handlePopupHeaderMenuClick}/>
            } /> 
          <Route path="/movies" 
            element={<ProtectedRoute 
              element={Movies} 
              isLoggedIn={isLoggedIn}
              isLoading={isLoading} 
              movies={movies}
              onBurgerClick={handlePopupHeaderMenuClick}/>
            } /> 
          <Route path="/saved-movies" 
            element={<ProtectedRoute 
              element={SavedMovies} 
              isLoggedIn={isLoggedIn}
              isLoading={isLoading} 
              onBurgerClick={handlePopupHeaderMenuClick}/>
            } />
          <Route path="*" element={<PageNotFound /> } />
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