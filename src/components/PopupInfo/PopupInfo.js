import React from 'react';
import './PopupInfo.css';

function PopupInfo({isOpen, onClose, message}) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`} aria-label="информация о регистрации">
      <div className="popup__container">
        <h3 className="popup__text">{message}</h3>
        <button
          type="button"
          className="popup__close-icon"
          onClick={onClose}
          aria-label="закрыть попап"
          title="закрыть попап" />
      </div>
    </div>
  );
}

export default PopupInfo;