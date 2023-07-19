import React from 'react';
import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import PageNotFound from '../PageNotFound/PageNotFound';
import PopupHeaderMenu from '../PopupHeaderMenu/PopupHeaderMenu';

function App() {
  const [message, setMessage] = useState('');
  const [isPopupHeaderMenuOpen, setIsPopupHeaderMenuOpen] = useState(false);
  const handlePopupHeaderMenuClick = () => {
    setIsPopupHeaderMenuOpen(true);
  }
  function closePopup() {
    setIsPopupHeaderMenuOpen(false);
  }
  function resetMessage() {
    setMessage('');
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main onBurgerClick={handlePopupHeaderMenuClick} />} />
        <Route path="/signup" element={<Register  message={message} resetMessage={resetMessage} />} />
        <Route path="/signin" element={<Login message={message} resetMessage={resetMessage}/>} />
        <Route path="/profile" element={<Profile message={message} resetMessage={resetMessage}
          onBurgerClick={handlePopupHeaderMenuClick}/>} />
        <Route path="/movies" element={<Movies onBurgerClick={handlePopupHeaderMenuClick}/>} />
        <Route path="/saved-movies" element={<SavedMovies onBurgerClick={handlePopupHeaderMenuClick}/>} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <PopupHeaderMenu 
      isOpen={isPopupHeaderMenuOpen} 
      onClose={closePopup}
       />
    </div>
  );
}

export default App;